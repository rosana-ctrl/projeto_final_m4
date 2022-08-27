import db from "../database/db-sqlite.js"

export default class Dao {

    insereLogin = (login) => {
        const INSERE_LOGIN = `
        INSERT INTO LOGIN (email, senha)
        VALUES (?,?)
        `
        return new Promise((resolve, reject) => {
            db.run(INSERE_LOGIN,
                login.email, login.senha,
                (error) => {
                    if (error)
                        reject(error)
                    else
                        resolve(login)
                }
            )
        })
    }


}