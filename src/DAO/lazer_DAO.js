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

    pegaUmNome : (nome_Hospede)=>{
        return new Promise((resolve, reject)=>{
            db.get('SELECT * FROM LAZER WHERE nome_Hospede = ?', nome_Hospede,
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
                            "mensagem": `Atividade ${atividade.nome_Atividade} para hospede ${atividade.nome_Hospede} inserida com sucesso`,
                            "erro": false
                        })
                    }
                }
            )
        })
    },


    deletaAtividade: (nome_Hospede) => {
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM LAZER WHERE nome_Hospede = ?`, nome_Hospede,
                (error) => {
                    if (error) {
                        reject({
                            msg: error.message,
                            error: true
                        })
                    } else {
                        resolve({
                            msg: `Atividade de hospede ${nome_Hospede} foi excluída com sucesso`,
                            error: false
                        })
                    }
                })
        })
    },

    atualizarAtividade: (id, novoAtividade) => {
        const ATUALIZA_LAZER = `
        UPDATE LAZER
        SET nome_Hospede = ?, nome_Atividade = ?, dia_Atividade = ?
        WHERE id = ?
        `
        return new Promise((resolve, reject) => {
            db.run(ATUALIZA_LAZER,
                novoAtividade.nome_Hospede, novoAtividade.nome_Atividade, novoAtividade.dia_Atividade,
                id,
                (error) => {
                    if (error)
                        reject(error)
                    else
                        resolve(novoAtividade)
                }
            )
        })
    }
    
}
export default lazerDAO