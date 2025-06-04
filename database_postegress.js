import {sql} from"./db.js"


export class DatabasePostgress{

   async create(pokemon){
    const {id, nome, tipo, ataques} = pokemon;


    await sql`insert into pokemon (id, nome, tipo, ataques) values 
    (${id},${nome},${tipo},${ataques})`

    }

    async list(nome){
        
        let pokemon;

        if(nome){
            pokemon = await sql`select * from pokemon where nome ilike ${'%'+nome+'%'}`;
        }else{
            pokemon = await sql`select * from pokemon`;
        }
        return pokemon;

    }

    async update(idParams, pokemon){
        const { nome, tipo, ataques} = pokemon;
        await sql`update pokemon set nome = ${nome}, tipo = ${tipo}, ataques = ${ataques} where id = ${idParams}`

    }

    async destroy(id){

       await  sql`delete from pokemon where id = ${id}`

    }

    async insertMany(pokemons) {
        
// Um loop for...of que percorre cada Pokémon no array.
  for (const pokemon of pokemons) {
    const { id, nome, tipo, ataques } = pokemon;
    await sql`
      insert into pokemon (id, nome, tipo, ataques)
      values (${id}, ${nome}, ${tipo}, ${ataques})
    `;
  }
}

}