const lazerDao = {
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

    pegaUmaAtividade: (atividade) => {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM LAZER WHERE ATIVIDADE = ?`, atividade,
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

    deletaAtividade: (atividade) => {
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM RESERVAS WHERE ATIVIDADE = ?`, atividade,
                (error) => {
                    if (error) {
                        reject({
                            msg: error.message,
                            error: true
                        })
                    } else {
                        resolve({
                            msg: `Atividade ${atividade} deletada com sucesso`,
                            error: false
                        })
                    }
                })
        })
    },

    atualizaAtividade: (atividade, novosDados) => {
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
                            msg: `Atividade de Lazer ${atividade} atualizada com sucesso`,
                            "Atividade": novosDados,
                            error: false
                        })
                    }
                }
            )
        })
    }
}



export default lazerDao