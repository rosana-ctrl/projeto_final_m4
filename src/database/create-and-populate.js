import sqlite3 from "sqlite3";
sqlite3.verbose()

import { dirname } from'path'
import { fileURLToPath } from 'url'
const filePath = dirname(fileURLToPath(import.meta.url)) + '/database.db'
const db = new sqlite3.Database(filePath)

const RESERVAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "RESERVAS" (
    "id_reserva" INTEGER PRIMARY KEY AUTOINCREMENT,
    "quarto" varchar(64),
    "quantLeitos" varchar(64),
    "frigobar" varchar(64),
    "dataEntrada" varchar(64),
    "dataSaida" varchar(64),
  );`;

  const ADD_RESERVAS_DATA = `
  INSERT INTO RESERVAS (ID_RESERVA, QUARTO, QUANTLEITOS, FRIGOBAR, DATAENTRADA, DATASAIDA)
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
      (20, '39', '2', 'Não', '13/07/2022', '14/07/2022'),
  `

  function criaTabelaReserva() {
    db.run(RESERVAS_SCHEMA, (error)=> {
        if (error) console.log("Erro ao criar tabela de reservas");
    });
}


function populaTabelaReserva() {
    db.run(ADD_RESERVAS_DATA, (error)=> {
        if (error) console.log("Erro ao popular tabela de reservas");
    });
}

db.serialize( () => {
    criaTabelaReserva();
    populaTabelaReserva();
});