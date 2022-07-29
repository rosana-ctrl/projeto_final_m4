import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";
sqlite3.verbose();
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db";
const db = new sqlite3.Database(filePath);


const LAZER_SCHEMA = `
CREATE TABLE IF NOT EXISTS "LAZER" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome_Hospede" varchar(64),
    "nome_Atividade" varchar(64),
    "dia_Atividade" varchar(10) 
  );`;

const ADD_LAZER_DATA = `
INSERT INTO LAZER (ID, NOME_HOSPEDE, NOME_ATIVIDADE, DIA_ATIVIDADE)
VALUES 
    (1, 'Geraldo Nascimento', 'Trilha', '10/07/2022'),
    (2, 'Mariah Assunção', 'SPA', '28/07/2022'),
    (3, 'Raimunda Freitas', 'Yoga', '02/08/2022')
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
