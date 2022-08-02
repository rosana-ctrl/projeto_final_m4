import ServicosDao from '../DAO/servicosDAO.js'
import validacaoServicos from '../services/validacaoServicos.js';

export default class Servicos {

    insereServico = async (dados) => {
        try {
            let servico = new validacaoServicos(dados.room_service, dados.early_checkin, dados.late_checkout, dados.governanca, dados.concierge)
            let resultado = ServicosDao.insereServico(servico);
            return {
                "dados": resultado,
                "status": 200
            }
        } catch (error) {
            throw error
        }
    }

    atualizaServico = async (id, dados) => {

        let servico = new validacaoServicos(dados.room_service, dados.early_checkin, dados.late_checkout, dados.governanca, dados.concierge)
        let resultado = await ServicosDao.pegaServico(id)
        console.log(resultado)
        if (resultado.length != 0) {
            const servicoAtualizado = {
                "room_service": dados.room_service || resultado.room_service,
                "early_checkin": dados.early_checkin || resultado.early_checkin,
                "late_checkout": dados.late_checkout || resultado.late_checkout,
                "governanca": dados.governanca || resultado.governanca,
                "concierge": dados.concierge || resultado.concierge
            }
            return await ServicosDao.atualizaServico(id, servicoAtualizado)
        } else {
            throw new Error("Serviço não encontrado")
        }
    }

    pegaTodosServicos = async () => {
        try {
            let resultado = await ServicosDao.pegaTodosServicos()
            return {
                "dados": resultado,
                "total": resultado.length,
                "status": 200
            }

        } catch (error) {
            throw error
        }
    }

    pegaServico = async (id) => {
        try {
            let resultado = await ServicosDao.pegaServico(id)
            if (resultado.length != 0) {
                return {
                    "dados": resultado,
                    "status": 200
                }
            } else {
                return {
                    "mensagem": `Servico com id ${id} não encontrado`,
                    "status": 400
                }
            }
        } catch (error) {
            throw error
        }
    }

    deletaServico = async (id) => {

        let resultado = await ServicosDao.pegaServico(id)

        if (resultado.length != 0) {
            resultado = await ServicosDao.deletaServico(id)
            return {
                "mensagem": `Servico com id ${id} deletado`,
                "status": 200
            }
        }
        return {
            "mensagem": `Servico com id ${id} não encontrado`,
            "status": 400
        }
    }
}