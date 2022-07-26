import lazerDAO from "../DAO/lazer_DAO.js"
import db from "../database/db-sqlite.js"
import {campoNomeVazio, campoAtividadeVazio, campoDataVazio} from "../services/validaLazer.js";

class Lazer {   
    
    pegaAtividades = async () => {
        return await lazerDAO.pegarTodosLazer()
    }
    
    pegaUmNome = async (nome_Hospede)=>{
        try {
            const dados = await lazerDAO.pegaUmNome (nome_Hospede)
            if(dados){
                return {
                    "dados" : dados,
                    "status" : 200
                }
            } else{
                return {
                    "mensagem" : `Nome do hospede ${nome_Hospede} não foi encontrado`,
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

    pegaUmId = async (id) => {
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

    insereAtividade = async (nome_Atividade)=>{
        try {
            if(campoAtividadeVazio(nome_Atividade.nome_Atividade) && campoNomeVazio(nome_Atividade.nome_Hospede)&& campoDataVazio(nome_Atividade.dia_Atividade)){
                const mensagem = await lazerDAO.insereAtividade(nome_Atividade)
            return {
                "mensagem" : mensagem,
                "status" : 200
            }
            }           
        } catch (error) {
            return {
                "mensagem" : error.message,
                "status" : 400
            }
        }
    }    

    deletaAtividade = async (nome_Hospede)=>{
        try {
            const mensagem = await lazerDAO.deletaAtividade(nome_Hospede)
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

    atualizarAtividade = async (id, novosDados)=>{
        const lazerAtual = await lazerDAO.pegaUmId(id)
        console.log(lazerAtual)
        if(lazerAtual){
            const lazerAtualizado = {
                "nome_Hospede" : novosDados.nome_Hospede || lazerAtual.nome_Hospede,
                "nome_Atividade" : novosDados.nome_Atividade || lazerAtual.nome_Atividade,
                "dia_Atividade" : novosDados.dia_Atividade || lazerAtual.dia_Atividade
            }
            return await lazerDAO.atualizarAtividade(id, lazerAtualizado)
        } else{
            throw new Error("Id não encontrado")
        }

    }

}

export default Lazer