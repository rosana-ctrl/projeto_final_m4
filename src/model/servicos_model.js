import ServicosDao from '../DAO/servicosDAO.js'
import validacaoServicos from '../services/validacaoServicos.js';

export default class Servicos {

    solicitaServico = async (servico) => {

        try {
            const servicoNovo = new validacaoServicos(servico.room_service, servico.early_checkin, servico.late_checkout, servico.governanca, servico.concierge)
            ServicosDao.solicitaServico(servicoNovo);

        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    }

    pegaServico = async () => {

        return await ServicosDao.pegaServico()
    }

    deletaServico = async (id) => {

        return await ServicosDao.deletaServico(id)
    }

    atualizaServico = async (id, novoServico) => {

        const servicoAtualizado = await ServicosDao.atualizaservico(novoServico => {
            if (servicoAtualizado.id === id) {
                return {
                    "id": servicoAtualizado.id,
                    "room_service": novoServico.room_service || servicoAtualizado.room_service,
                    "late_checkout": novoServico.late_checkout || servicoAtualizado.late_checkout,
                    "early_checkin": novoServico.early_checkin || servicoAtualizado.early_checkin,
                    "concierge": novoServico.concierge || servicoAtualizado.concierge,
                    "governanca": novoServico.governanca || servicoAtualizado.governanca
                }
            }
            return servicoAtualizado
        })

        ServicosDao.atualizaservico = servicoAtualizado

    }
}