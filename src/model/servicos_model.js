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
        try {
            let servico = new validacaoServicos(dados.room_service, dados.early_checkin, dados.late_checkout, dados.governanca, dados.concierge)
            let resultado = await ServicosDao.atualizaservico(id, servico)
            return {
                "dados": resultado,
                "status": 200
            }
        } catch (error) {
            throw error
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
            return {
                "dados": resultado,
                "status": 200
            }

        } catch (error) {
            throw error
        }
    }

    deletaServico = async (id) => {
        try {
            let resultado = await ServicosDao.deletaServico(id)
            return {
                "status": 200
            }

        } catch (error) {
            throw error
        }
    }
}