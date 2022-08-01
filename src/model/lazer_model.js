import lazerDAO from "../DAO/lazer_DAO.js"
import db from "../database/db-sqlite.js"

class Lazer {
   
    insereAtividade = async(atividade) => {
        try {
            const novaAtividade = new validacaoAtividade (atividade.nome_hospede, atividade.nome_atividade, atividade.dia_atividade)
            lazerDAO.insereAtividade (novaAtividade)
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

    pegaUmaAtividade = async (nome_atividade) => {
        return await lazerDAO.pegaUmaAtividade (nome_atividade)
    }

    pegaUmNome = async (nome_hospede) => {
        return await lazerDAO.pegaUmaAtividade (nome_hospede)
    }

    pegaUmaData = async (dia_atividade) => {
        return await lazerDAO.pegaUmaAtividade (dia_atividade)
    }

    deletaAtividade = async (nome_atividade) => {
        return await lazerDAO.deletaAtividade (nome_atividade)
    }

    atualizaAtividade = async (nome_atividade, novosDados) => {
        const atividadeAtualizada = await lazerDAO.atualizaAtividade (novosDados => {
            if (atividadeAtualizada.nome_atividade === nome_atividade) {
                return {
                    "id": atividadeAtualizada.id,
                    "nome_Hospede": novosDados.nome_hospede || atividadeAtualizada.nome_hospede,
                    "nome_Atividade": novosDados.nome_atividade || atividadeAtualizada.nome_atividade,
                    "dia_Atividade": novosDados.dia_atividade || atividadeAtualizada.dia_atividade
                }
            }
            return atividadeAtualizada
        })

        lazerDAO.atualizaAtividade = atividadeAtualizada
    }

}

export default Lazer



