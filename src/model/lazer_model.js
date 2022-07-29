import lazerDao from "../DAO/lazer_DAO.js"
import db from "../database/db-sqlite.js"

class Lazer {
    constructor (id, nomeHospede, nomeAtividade, diaAtividade) {
        this.id = id
        this.nomeHospede = nomeHospede
        this.nomeAtividade = nomeAtividade
        this.diaAtividade = diaAtividade
    }

    // insereHospede = (nomeHospede) => {
    //     db.push(nomeHospede)
    // }
   
    insereLazer = async(atividade) => {
        try {
            const novaAtividade = new ValidacaoAtividade (atividade.nomeHospede, atividade.nomeAtividade, atividade.diaAtividade)
            lazerDao.insereLazer (novaAtividade)
        } catch (error) {
            return {
                "msg": error.message,
                "erro": true
            }
        }
        
       
    }
    pegaAtividades = async () => {
        return await lazerDAO.pegarTodosLazer()
    } 
    // insereData = (diaAtividade) => {
    //     db.push(diaAtividade)
    // }

    // deletaAtividade = (nomeatividade) => {
    //     const novoDB = db.filter (db => db.atividade !==nomeatividade)
    //     db = novoDB
    // }

    pegaUmaAtividade = async (atividade) => {
        return await lazerDAO.pegaUmaAtividade (atividade)
    }

    deletaAtividade = async (atividade) => {
        return await lazerDAO.deletaAtividade (atividade)
    }

    atualizaAtividade = async (atividade, novosDados) => {
        const atividadeAtualizada = await lazerDAO.atualizaAtividade (novosDados => {
            if (atividadeAtualizada.atividade === atividade) {
                return {
                    "id": atividadeAtualizada.id_reserva,
                    "nome_Hospede": novosDados.nome_Hospede || atividadeAtualizada.nome_Hospede,
                    "nome_Atividade": novosDados.nome_Atividade || atividadeAtualizada.nome_Atividade,
                    "dia_Atividade": novosDados.dia_Atividade || atividadeAtualizada.dia_Atividade
                }
            }
            return atividadeAtualizada
        })

        lazerDAO.atualizaAtividade = atividadeAtualizada
    }

}

export default Lazer

