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
    
    pegaUmaAtividade = async (nome_Atividade)=>{
        try {
            const dados = await lazerDAO.pegaUmaAtividade(nome_Atividade)
            if(dados){
                return {
                    "dados" : dados,
                    "status" : 200
                }
            } else{
                return {
                    "mensagem" : `Atividade ${nome_Atividade} não encontrada`,
                    "status" : 404
                }
            }
      
        } catch (error) {
            return {
                "mensagem" : error.message,
                "status" : 400
            }
        }

    }

    insereAtividade = async (nome_Atividade)=>{
        try {
           
            // const novoAtividade = criaAtividade(nome_Atividade)
            const mensagem = await lazerDAO.insereAtividade(nome_Atividade)
            return {
                "mensagem" : mensagem,
                "status" : 200
            }
        } catch (error) {
            return {
                "mensagem" : error.message,
                "status" : 400
            }
        }
    }

    pegaUmId = async (id)=> {
        try {
            const dados = await lazerDAO.pegaUmId(id)
            if(dados){
                return {
                    "dados" : dados,
                    "status" : 200
                }
            } else{
                return {
                    "mensagem" : `Hospede de Id ${id} não encontrado`,
                    "status" : 404
                }
            }
      
        } catch (error) {
            return {
                "mensagem" : error.message,
                "status" : 400
            }
        }

    }    

    deletaAtividade = async (nome_atividade) => {
        return await lazerDAO.deletaAtividade (nome_atividade)
    }

    atualizaAtividade = async (nome_atividade, novosDados) => {
        const atividadeAtualizada = await lazerDAO.atualizaAtividade (nome_atividade, novosDados) 
            if (atividadeAtualizada.nome_atividade === nome_atividade) {
                return {
                    "id": atividadeAtualizada.id,
                    "nome_Hospede": novosDados.nome_hospede || atividadeAtualizada.nome_hospede,
                    "nome_Atividade": novosDados.nome_atividade || atividadeAtualizada.nome_atividade,
                    "dia_Atividade": novosDados.dia_atividade || atividadeAtualizada.dia_atividade
                }
            }
            return atividadeAtualizada
        
        
    }

}

export default Lazer



