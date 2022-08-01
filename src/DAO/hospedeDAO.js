import db from "../database/db-sqlite.js"

export default class Dao {

    insereHospede = (hospede) =>{
        const INSERE_HOSPEDE = `
        INSERT INTO HOSPEDES (nome, genero, nasc, email, celular, senha)
        VALUES (?,?,?,?,?,?)
        `
        return new Promise((resolve, reject)=>{
            db.run(INSERE_HOSPEDE,
                hospede.nome, hospede.genero, hospede.nasc, hospede.email, hospede.celular, hospede.senha,
                (error)=>{
                    if(error)
                        reject(error)
                    else
                        resolve(hospede)
                }
            )
        })
    }

    pegaTodosHospedes = () => {
        const PEGA_HOSPEDES = `
        SELECT * FROM HOSPEDES
        `
        return new Promise((resolve, reject)=>{
            db.all(PEGA_HOSPEDES, (error,row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    }

    pegaHospedeEmail = (email)=>{
        const PEGA_HOSPEDE = `
        SELECT * FROM HOSPEDES
        WHERE email = ?
        `
        return new Promise((resolve, reject)=>{
            db.get(PEGA_HOSPEDE, email, (error, row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    }

    pegaHospedeId = (id_Hospede)=>{
        const PEGA_HOSPEDE = `
        SELECT * FROM HOSPEDES
        WHERE id_Hospede = ?
        `
        return new Promise((resolve, reject)=>{
            db.get(PEGA_HOSPEDE, id_Hospede, (error, row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    }

    deletaHospede = (id_Hospede)=>{
        const DELETA_HOSPEDE = `
        DELETE FROM HOSPEDES
        WHERE id_Hospede = ?
        `
        return new Promise((resolve, reject)=>{
            db.run(DELETA_HOSPEDE, id_Hospede, (error)=>{
                if(error)
                    reject(error)
                else
                    resolve(`Hospede com ID = ${id_Hospede} deletado`)
            })
        })
    }

    atualizaHospede = (id_Hospede, novoHospede) => {
        const ATUALIZA_HOSPEDE = `
        UPDATE HOSPEDES
        SET nome = ?, genero = ?, nasc = ?, email = ?, celular = ?, senha = ?
        WHERE id_Hospede = ?
        `
        return new Promise((resolve, reject)=>{
            db.run(ATUALIZA_HOSPEDE,
                novoHospede.nome, novoHospede.genero, novoHospede.nasc, novoHospede.email, novoHospede.celular, novoHospede.senha,
                id_Hospede,
                (error)=>{
                    if(error)
                        reject(error)
                    else
                        resolve(novoHospede)
                }
            )
        })  
    }
}