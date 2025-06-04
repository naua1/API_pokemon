import {fastify} from"fastify";

import { DatabasePostgress } from "./database_postegress.js";

 const database = new DatabasePostgress();

const server = fastify();


server.get("/pokemon",async (req,res) =>{

    const nome = req.query.nome;

    const pokemon = await  database.list(nome)

    return pokemon;
})

server.post("/pokemon", async (req,res) =>{

    const pokemon = req.body;
    await database.create(pokemon);

    return res.status(201).send();

});


server.post("/pokemon/vario", async (req,res) =>{

    const pokemon = req.body;
    await database.insertMany(pokemon);

    return res.status(201).send();

});

server.put("/pokemon/:id",async (req, res) =>{
    const id = req.params.id;
    const pokemon = req.body;

    await database.update(id,pokemon);

    return res.status(204).send();
});

server.delete("/pokemon/:id", async (req,res)=>{

    const id = req.params.id;

    await database.destroy(id);
});

server.listen({
    host:"0.0.0.0",
    port: 3000,
});