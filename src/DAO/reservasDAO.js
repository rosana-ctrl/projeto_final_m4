import db from "../database/db-sqlite.js";

const reservasDAO = {
    pegaTodasReservas: () => {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM RESERVAS', (error, linhas) => {
                if (error) {
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "Reservas": linhas,
                        "erro": false
                    })
                }
            })
        })
    },

    pegaUmaReserva: (quarto) => {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM RESERVAS WHERE QUARTO = ?`, quarto,
                (error, linhas) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(linhas)
                    }
                })
        })

    },

    insereReserva: (reserva) => {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO RESERVAS (QUARTO, QUANTLEITOS, FRIGOBAR, DATAENTRADA, DATASAIDA)
            VALUES (?,?,?,?,?)` ,
                reserva.quarto, reserva.quantLeitos, reserva.frigobar, reserva.dataEntrada, reserva.dataSaida,
                (error) => {
                    if (error) {
                        reject({
                            "mensagem": error.mensage,
                            "erro": true
                        })
                    } else {
                        resolve({
                            "mensagem": `Reserva inserida com sucesso`,
                            "erro": false
                        })
                    }
                }
            )
        })
    },

    deletaReserva: (quarto) => {
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM RESERVAS WHERE QUARTO = ?`, quarto,
                (error,linhas) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(linhas)
                    }
                })
        })
    },

    atualizaReserva: (quarto, novosDados) => {
        return new Promise((resolve, reject) => {
            db.run(`UPDATE RESERVAS 
            SET QUARTO = ?, QUANTLEITOS = ?, FRIGOBAR = ?, DATAENTRADA = ?, DATASAIDA =?
            WHERE QUARTO = ?`,
                novosDados.quarto, novosDados.quantLeitos, novosDados.frigobar, novosDados.dataEntrada, novosDados.dataSaida,
                quarto,
                (error) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(novosDados)
                    }
                }
            )
        })
    }

}

export default reservasDAO