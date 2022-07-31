import db from "../database/db-sqlite.js";

const ServicosDao = {

    insereServico: (servico) => {
        const INSERE_SERVICO = `
        INSERT INTO SERVICOS (room_service, early_checkin, late_checkout, governanca, concierge)
        VALUES (?,?,?,?,?)
        `
        return new Promise((resolve, reject) => {
            db.run(INSERE_SERVICO,
                servico.room_service, servico.early_checkin, servico.late_checkout, servico.governanca, servico.concierge,
                (error) => {
                    if (error)
                        reject(error)
                    else
                        resolve(servico)
                }
            )
        })
    },

    atualizaservico: (id, servico) => {
        const ATUALIZA_SERVICO = `
        UPDATE SERVICOS
        SET room_service = ?, early_checkin = ?, late_checkout = ?, governanca = ?, concierge = ?
        WHERE id = ?
        `
        return new Promise((resolve, reject) => {
            db.run(ATUALIZA_SERVICO,
                servico.room_service, servico.early_checkin, servico.late_checkout, servico.governanca, servico.concierge,
                id,
                (error) => {
                    if (error)
                        reject(error)
                    else
                        resolve(servico)
                }
            )
        })
    },

    pegaTodosServicos: () => {
        const PEGA_SERVICO = `
        SELECT * FROM SERVICOS
        `
        return new Promise((resolve, reject) => {
            db.all(PEGA_SERVICO, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    pegaServico: (id) => {
        const PEGA_SERVICO = `
        SELECT * FROM SERVICOS
        WHERE id = ?
        `
        return new Promise((resolve, reject) => {
            db.all(PEGA_SERVICO, id, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    deletaServico: (id) => {
        const DELETA_SERVICO = `
        DELETE FROM SERVICOS
        WHERE id = ?
        `
        return new Promise((resolve, reject) => {
            db.get(DELETA_SERVICO, id, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    }
}

export default ServicosDao