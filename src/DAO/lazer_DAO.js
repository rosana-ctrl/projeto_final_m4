const lazerDAO = {
    pegarTodosLazer: (db) => {
        return new Promise ((resolve, reject) => {
            db.all ('SELECT * FROM LAZER', (error, rows) =>{
                if (error) {

                    reject ({
                        msg: error.message,
                        error: true
                    })
                } else {

                    resolve ({
                        lazer: rows,
                        error: false
                    })
                }
            })
        })
    },

    pegaUmaAtividade: (nome_atividade) => {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM LAZER WHERE NOME_ATIVIDADE = ?`, nome_atividade,
                (error, rows) => {
                    if (error) {
                        reject({
                            msg: error.message,
                            error: true
                        })
                    } else {
                        resolve({
                            lazer: rows,
                            error: false
                        })
                    }
                })
        })
    
    },

    pegaUmNome: (nome_hospede) => {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM LAZER WHERE NOME_HOSPEDE = ?`, nome_hospede,
                (error, rows) => {
                    if (error) {
                        reject({
                            msg: error.message,
                            error: true
                        })
                    } else {
                        resolve({
                            lazer: rows,
                            error: false
                        })
                    }
                })
        })
    
    },

    pegaUmaData: (dia_atividade) => {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM LAZER WHERE DIA_ATIVIDADE = ?`, dia_atividade,
                (error, rows) => {
                    if (error) {
                        reject({
                            msg: error.message,
                            error: true
                        })
                    } else {
                        resolve({
                            lazer: rows,
                            error: false
                        })
                    }
                })
        })
    
    },

    insereAtividade: (atividade) => {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO LAZER (ID, NOME_HOSPEDE, NOME_ATIVIDADE, DIA_ATIVIDADE)
            VALUES (?,?,?,?)`, atividade.id, atividade.nome_hospede, atividade.nome_atividade, atividade.dia_atividade,
                (error) => {
                    if (error) {
                        reject({
                            msg: error.message,
                            error: true
                        })
                    } else {
                        resolve({
                            "mensagem": "Atividade agendada com sucesso",
                            "erro": false
                        })
                    }
                }
            )
        })
    },

    deletaAtividade: (nome_atividade) => {
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM RESERVAS WHERE NOME_ATIVIDADE = ?`, nome_atividade,
                (error) => {
                    if (error) {
                        reject({
                            msg: error.message,
                            error: true
                        })
                    } else {
                        resolve({
                            msg: `Atividade ${nome_atividade} deletada com sucesso`,
                            error: false
                        })
                    }
                })
        })
    },

    atualizaAtividade: (nome_atividade, novosDados) => {
        return new Promise((resolve, reject) => {
            db.run(`UPDATE ATIVIDADE 
            SET NOME_HOSPEDE = ?, NOME_ATIVIDADE = ?, DIA_ATIVIDADE = ?, WHERE ATIVIDADE = ?`,
                novosDados.hospede, novosDados.atividade, novosDados.data,
                (error) => {
                    if (error) {
                        reject({
                            "mensagem": error.message,
                            "erro": true
                        })
                    } else {
                        resolve({
                            msg: `Atividade de Lazer ${nome_atividade} atualizada com sucesso`,
                            "Atividade": novosDados,
                            error: false
                        })
                    }
                }
            )
        })
    }
}



export default lazerDAO