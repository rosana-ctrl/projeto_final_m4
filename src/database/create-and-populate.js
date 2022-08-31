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
    "id_Hospede" varchar(64),
    "quarto" varchar(64),
    "quantLeitos" varchar(64),
    "quantAdultos" varchar(64),
    "quantCrian" varchar(64),
    "dataEntrada" varchar(64),
    "dataSaida" varchar(64)
  );`;

const ADD_RESERVAS_DATA = `
  INSERT INTO RESERVAS (id, id_Hospede, quarto, quantLeitos, quantAdultos, quantCrian, dataEntrada, dataSaida)
  VALUES 
      ( '1', '1', '10', '3', '2', '1', '01/07/2022', '03/07/2022'),
      ( '2', '2', '11', '3', '2', '1', '01/07/2022', '05/07/2022'),
      ( '3', '3', '12', '3', '1', '1', '02/07/2022', '03/07/2022'),
      ( '4', '4', '14', '2', '2', '0', '02/07/2022', '05/07/2022');
  `

function criaTabelaReserva() {
    db.run(RESERVAS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de reservas", error);
    });
}


function populaTabelaReserva() {
    db.run(ADD_RESERVAS_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de reservas", error);
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
        if (error) console.log("Erro ao criar tabela de usuários", error);
    })
}

function populaTabelaHosp() {
    db.run(ADD_HOSPEDES_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de usuários", error);
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

const LOGIN_SCHEMA = `
CREATE TABLE IF NOT EXISTS "LOGIN" (
    "id_Login" INTEGER PRIMARY KEY AUTOINCREMENT,
    "email" varchar(64),
    "senha" varchar(64)
  );`;

const ADD_LOGIN_DATA = `
INSERT INTO LOGIN (id_Login, email, senha)
VALUES 
    (1, 'rosana@gmail.com', 'aB@aQ34526'),
    (2, 'gloria@gmail.com', 'cD@aJ34826'),
    (3, 'ronald@gmail.com', '123@aBcD'),
    (4, 'kay@gmail.com', '456!aBcD')

`

function criaTabelaLogin() {
    db.run(LOGIN_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de login");
    })
}

function populaTabelaLogin() {
    db.run(ADD_LOGIN_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de login");
    })
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
    criaTabelaLogin();
    populaTabelaLogin();
})