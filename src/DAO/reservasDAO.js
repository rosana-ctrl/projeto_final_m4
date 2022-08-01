
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
                        reject({
                            "mensagem": error.message,
                            "erro": true
                        })
                    } else {
                        resolve({
                            "Reserva": linhas,
                            "erro": false
                        })
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
                (error) => {
                    if (error) {
                        reject({
                            "mensagem": error.message,
                            "erro": true
                        })
                    } else {
                        resolve({
                            "mensagem": `Reserva do quarto ${quarto} deletada com sucesso`,
                            "erro": false
                        })
                    }
                })
        })
    },

    atualizaReserva: (quarto, novosDados) => {
        const query = (novosDados) => {
            let quarto = ""
            let quantLeitos = ""
            let frigobar = ""
            let dataEntrada = ""
            let dataSaida = ""
            if (novosDados.quarto) {
                quarto = `QUARTO = ?`
            }
            if (novosDados.quantLeitos) {
                quantLeitos = `QUANTLEITOS = ?`
                if (quarto) {
                    quantLeitos = ', ' + quantLeitos
                }
            }
            if (novosDados.frigobar) {
                frigobar = `FRIGOBAR = ?`
                if (quarto || quantLeitos) {
                    frigobar = ', ' + frigobar
                }
            }
            if (novosDados.dataEntrada) {
                dataEntrada = `DATAENTRADA = ?`
                if (quarto || quantLeitos || frigobar) {
                    dataEntrada = ', ' + dataEntrada
                }
            }
            if (novosDados.dataSaida) {
                dataSaida = `DATASAIDA = ?`
                if (quarto || quantLeitos || frigobar || dataEntrada) {
                    dataSaida = ', ' + dataSaida
                }
            }

            return `UPDATE RESERVAS SET 
            ${quarto} ${quantLeitos} ${frigobar} ${dataEntrada} ${dataSaida}
            WHERE QUARTO = ?`
        }

        return new Promise((resolve, reject) => {
            db.run(query(novosDados),
                ...Object.values(novosDados), quarto,
                (error) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(`Reserva do quarto ${quarto} atualizada com sucesso`,
                        )
                    }
                }
            )
        })
    }

}

export default reservasDAO