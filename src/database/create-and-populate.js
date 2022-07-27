/*
Esse arquivo deve ser executado apenas uma vez
*/
import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";
sqlite3.verbose();
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db";
const db = new sqlite3.Database(filePath);


const LAZER_SCHEMA = `
CREATE TABLE IF NOT EXISTS "LAZER" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "faixa_etaria" varchar(64),
    "id_atividade" int,
    "nome_atividade" varchar(64)
  );`;

const ADD_LAZER_DATA = `
INSERT INTO LAZER (ID, FAIXA_ETARIA, ID_ATIVIDADE, NOME_ATIVIDADE)
VALUES 
    (1, 'Adulto', 1, 'Trilha'),
    (2, 'Jovem', 2, 'Jogos Eletronicos'),
    (3, 'Criança', 3, 'Brinquedoteca')
`

function criaTabelaLzr() {
    db.run(LAZER_SCHEMA, (error)=> {
        if (error) console.log("Erro ao criar tabela de lazer");
    });
}


function populaTabelaLzr() {
    db.run(ADD_LAZER_DATA, (error)=> {
        if (error) console.log("Erro ao popular tabela de lazer");
    });
}




db.serialize( ()=> {
    criaTabelaLzr();
    populaTabelaLzr();
});
