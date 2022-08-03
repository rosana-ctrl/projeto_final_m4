import sqlite3 from "sqlite3";
sqlite3.verbose()

import {
    dirname
} from 'path'
import {
    fileURLToPath
} from 'url'
const filePath = dirname(fileURLToPath(
    import.meta.url)) + '/database.db'
const db = new sqlite3.Database(filePath)

const RESERVAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "RESERVAS" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "quarto" varchar(64),
    "quantLeitos" varchar(64),
    "frigobar" varchar(64),
    "dataEntrada" varchar(64),
    "dataSaida" varchar(64)
  );`;

const ADD_RESERVAS_DATA = `
  INSERT INTO RESERVAS (id, quarto, quantLeitos, frigobar, dataEntrada, dataSaida)
  VALUES 
      (1, '10', '3', 'Sim', '01/07/2022', '03/07/2022'),
      (2, '11', '3', 'Sim', '01/07/2022', '05/07/2022'),
      (3, '12', '3', 'Não', '02/07/2022', '03/07/2022'),
      (4, '14', '2', 'Sim', '02/07/2022', '05/07/2022'),
      (5, '15', '2', 'Não', '03/07/2022', '05/07/2022'),
      (6, '18', '2', 'Sim', '04/07/2022', '08/07/2022'),
      (7, '20', '1', 'Sim', '05/07/2022', '06/07/2022'),
      (8, '22', '1', 'Sim', '05/07/2022', '07/07/2022'),
      (9, '23', '1', 'Não', '07/07/2022', '08/07/2022'),
      (10, '25', '2', 'Sim', '07/07/2022', '11/07/2022'),
      (11, '27', '4', 'Sim', '07/07/2022', '10/07/2022'),
      (12, '28', '3', 'Sim', '07/07/2022', '09/07/2022'),
      (13, '29', '3', 'Não', '08/07/2022', '09/07/2022'),
      (14, '30', '2', 'Não', '10/07/2022', '12/07/2022'),
      (15, '32', '2', 'Sim', '10/07/2022', '13/07/2022'),
      (16, '34', '1', 'Sim', '10/07/2022', '14/07/2022'),
      (17, '35', '1', 'Sim', '11/07/2022', '17/07/2022'),
      (18, '36', '2', 'Sim', '11/07/2022', '14/07/2022'),
      (19, '37', '3', 'Sim', '12/07/2022', '17/07/2022'),
      (20, '39', '2', 'Não', '13/07/2022', '14/07/2022')
  `

function criaTabelaReserva() {
    db.run(RESERVAS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de reservas");
    });
}


function populaTabelaReserva() {
    db.run(ADD_RESERVAS_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de reservas");
    });
}


const HOSPEDES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "HOSPEDES" (
    "id_Hospede" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" varchar(64),
    "genero" varchar(64),
    "nasc" varchar(64) ,
    "email" varchar(64),
    "celular" varchar(64),
    "senha" varchar(64)
  );`;

const ADD_HOSPEDES_DATA = `
INSERT INTO HOSPEDES (id_Hospede, nome, genero, nasc, email, celular, senha)
VALUES 
    (1, 'Rachelle Santolin', 'F', '13/12/1992', 'rach@gmail.com', '(21) 99765-8972', 'aB@aQ34526'),
    (2, 'Gloria Santos', 'F', '17/10/1990', 'gloria@gmail.com', '(21) 99545-8867', 'cD@aJ34826'),
    (3, 'Ronald Magalhães', 'M', '24/05/1980', 'ronald@gmail.com', '(11) 99321-9967', '123@aBcD'),
    (4, 'Kay Torres', 'NB', '09/09/1988', 'kay@gmail.com', '(31) 98381-9467', '456!aBcD')

`

function criaTabelaHosp() {
    db.run(HOSPEDES_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de usuários");
    })
}

function populaTabelaHosp() {
    db.run(ADD_HOSPEDES_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de usuários");
    })
}

const SERVICOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "SERVICOS" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "room_service" varchar(255),
    "early_checkin" datetime,
    "late_checkout" datetime,
    "governanca" varchar(255),
    "concierge" varchar(255)
  );`;

//   fazer uma query que chame o id do quarto
const ADD_SERVICOS_DATA = `
INSERT INTO SERVICOS (id, room_service, early_checkin, late_checkout, governanca, concierge)
VALUES 
    (1, 'café da manhã', null, '2021-01-13 16:30:00', 'toalha', 'teatro'),
    (2, 'almoço', 'null', 'null', 'mull', 'cinema'),
    (3, 'café da manhã', 'null', 'null', 'travesseiro', 'null'),
    (4, 'lanche', 'null', 'null', 'null', 'show')
`

function criaTabelaSer() {
    db.run(SERVICOS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de servicos");
    });
}


function populaTabelaSer() {
    db.run(ADD_SERVICOS_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de servicos");
    });
}

const RESTAURANTE_SCHEMA = `
CREATE TABLE IF NOT EXISTS "RESTAURANTE" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "cardapio" varchar(64),
    "bebida" varchar(64),
    "cliente" varchar(64)
  );`;

const ADD_RESTAURANTE_DATA = `
INSERT INTO RESTAURANTE (id, cardapio, bebida, cliente)
VALUES 
    (1, 'strogonoff de carne', 'suco de laranja', 'Luana da Silva'),
    (2, 'bife a parmegiana', 'coca-cola', 'Juma'),
    (3, 'feijoada', 'água', 'Demi Lovato')
`

function criaTabelaRestaurante() {
    db.run(RESTAURANTE_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de restaurante");
    });
}

function populaTabelaRestaurante() {
    db.run(ADD_RESTAURANTE_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela restaurante");
    });
}

const LAZER_SCHEMA = `
CREATE TABLE IF NOT EXISTS "LAZER" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome_Hospede" varchar(64),
    "nome_Atividade" varchar(64),
    "dia_Atividade" varchar(10) 
  );`;

const ADD_LAZER_DATA = `
INSERT INTO LAZER (id, nome_hospede, nome_atividade, dia_atividade)
VALUES 
    (1, 'Geraldo Nascimento', 'Trilha', '10/07/2022'),
    (2, 'Mariah Assunção', 'SPA', '28/07/2022'),
    (3, 'Raimunda Freitas', 'Yoga', '02/08/2022')
`

function criaTabelaLzr() {
    db.run(LAZER_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de lazer");
    });
}


function populaTabelaLzr() {
    db.run(ADD_LAZER_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de lazer");
    });
}

db.serialize(() => {
    criaTabelaReserva();
    populaTabelaReserva();
    criaTabelaHosp();
    populaTabelaHosp();
    criaTabelaSer();
    populaTabelaSer();
    criaTabelaRestaurante();
    populaTabelaRestaurante();
    criaTabelaLzr();
    populaTabelaLzr();
})