const db = new sqlite3.Database('database.db');

const SERVICOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "SERVICOS" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "room_service" varchar(255),
    "early_checkin" datetime,
    "late_checkout" varchar,
    "governanca" varchar(255),
    "concierge" varchar(255),
    FOREIGN KEY(ID_QUARTO) REFERENCES USUARIO(ID)
  );`;

//   fazer uma query que chame o id do quarto
const ADD_SERVICOS_DATA = `
INSERT INTO SERVICOS (ROOM_SERVICE, EARLY_CHECKIN, LATE_CHECKOUT, GOVERNANCA, CONCIERGE,)
VALUES 
    ('café da manhã', null, '2021-01-13 16:30:00', 'toalha', 'teatro'),
    ('almoço', 'null', 'null', 'mull', 'cinema'),
    ('café da manhã', 'null', 'null', 'travesseiro', 'null'),
    ('lanche', 'null', 'null', 'null', 'show')
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

db.serialize(() => {
    criaTabelaSer();
    populaTabelaSer();
});