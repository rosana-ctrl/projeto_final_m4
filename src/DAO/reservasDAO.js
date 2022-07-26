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

    pegaUmaReserva: (id) => {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM RESERVAS WHERE ID = ?`, id,
                (error, linhas) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(linhas)
                    }
                })
        })

    },

    pegaReservasHospede: (id) => {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM RESERVAS WHERE ID_HOSPEDE = ? ORDER BY dataEntrada`, id,
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
            db.run(`INSERT INTO RESERVAS (id_Hospede, quarto, quantLeitos, quantAdultos, quantCrian, dataEntrada, dataSaida)
            VALUES (?,?,?,?,?,?,?)`,
                reserva.idhospede, reserva.quarto, reserva.quantLeitos, reserva.quantAdultos, reserva.quantCrian, reserva.dataEntrada, reserva.dataSaida,
                (error) => {
                    if (error) {
                        reject({
                            "mensagem": error,
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

    deletaReserva: (id) => {
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM RESERVAS WHERE ID = ?`, id,
                (error, linhas) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(linhas)
                    }
                })
        })
    },

    atualizaReserva: (id, novosDados) => {
        return new Promise((resolve, reject) => {
            db.run(`UPDATE RESERVAS 
            SET ID_HOSPEDE = ?, QUARTO = ?, QUANTLEITOS = ?, QUANTADULTOS = ?, QUANTCRIAN =?, DATAENTRADA = ?, DATASAIDA =?
            WHERE ID = ?`,
                novosDados.idhospede, novosDados.quarto, novosDados.quantLeitos, novosDados.quantAdultos, novosDados.quantCrian, novosDados.dataEntrada, novosDados.dataSaida,
                id,
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