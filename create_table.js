import {sql} from"./db.js"

sql`
CREATE TABLE pokemon (
    id INTEGER PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    ataques TEXT[]
);`.then(() =>{
    console.log("table criada!!")
})