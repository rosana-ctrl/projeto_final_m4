import bd from "../database/bd.js"

export default class Servicos {

    solicitaServico = (bd_servicos) => {
        bd.bd_servicos.push(bd_servicos)
    }

    pegaServico = () => {
        return bd.bd_servicos
    }

    deletaServico = (room_service) => {

        const bd_v2 = bd.bd_servicos.filter(bd_servicos => bd_servicos.room_service !== room_service)
        bd.bd_servicos = bd_v2
    }

    atualizaServico = (room_service, new_service) => {

        const newDb = bd.bd_servicos.map(bd_servicos => {
            if (bd_servicos.room_service === room_service) {
                return {
                    "id": bd_servicos.id,
                    "room_service": new_service.room_service || bd_servicos.room_service,
                    "late_checkout": new_service.late_checkout || bd_servicos.late_checkout,
                    "early_checkin": new_service.early_checkin || bd_servicos.early_checkin,
                    "concierge": new_service.concierge || bd_servicos.concierge,
                    "governanca": new_service.governanca || bd_servicos.governanca
                }
            }
            return bd_servicos
        })

        bd.bd_servicos = newDb

    }
}