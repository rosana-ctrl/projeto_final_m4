import db from "../database/db-sqlite.js"

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

    pegaUmaAtividade : (nome_Atividade)=>{
        return new Promise((resolve, reject)=>{
            db.get('SELECT * FROM LAZER WHERE nome_Atividade = ?', nome_Atividade,
            (erro, dado)=>{
                if(erro){
                    reject(erro)
                }else{
                    resolve(dado)
                }
            })
        })

    },

    pegaUmId : (id)=>{
        return new Promise((resolve, reject)=>{
            db.get('SELECT * FROM LAZER WHERE id = ?', id,
            (erro, dado)=>{
                if(erro){
                    reject(erro)
                }else{
                    resolve(dado)
                }
            })
        })

    },

    
    insereAtividade: (atividade) => {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO LAZER (NOME_HOSPEDE, NOME_ATIVIDADE, DIA_ATIVIDADE)
            VALUES (?,?,?)`, atividade.nome_Hospede, atividade.nome_Atividade, atividade.dia_Atividade,
                (error) => {
                    if (error) {
                        reject({
                            "msg": error.message,
                            "error": true
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

    // insereAtividade: (atividade)=>{
    //     return new Promise((resolve, reject)=>{
    //         db.run(`INSERT INTO LAZER (nome_Hospede, nome_Atividade, dia_Atividade)
    //         VALUES (?, ?, ?)`, atividade.nome_Hospede, atividade.nome_Atividade, atividade.dia_Atividade,
    //         (erro)=>{
    //             if(erro){
    //                 reject(erro)
    //             }else{
    //                 resolve("Atividade agendada com sucesso")
    //             }
    //         })
    //     })
    // },

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
            db.run(`UPDATE LAZER 
            SET NOME_HOSPEDE = ?, NOME_ATIVIDADE = ?, DIA_ATIVIDADE = ? WHERE nome_Atividade = ?`,
                novosDados.nome_hospede, novosDados.nome_atividade, novosDados.dia_atividade, nome_atividade,
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