import bd from "../database/bd.js"

let idServicos = 1

export default class Servicos {
    constructor(room_service, early_checkin, late_checkout, governanca, concierge) {
        this.idServicos = idServicos++;
        this.room_service = room_service;
        this.early_checkin = early_checkin;
        this.late_checkout = late_checkout;
        this.governanca = governanca;
        this.concierge = concierge;

    }

    solicitarServico = (bd_servicos) => {
        bd.bd_servicos.push(bd_servicos)
    }

    pegaServico = () => {
        return bd.bd_servicos
    }
    deletaServico = (room_service) => {

        return bd.bd_servicos.filter(bd_servicos => bd_servicos.room_service === room_service)
    }

    atualizaServico = (room_service) => {

        return bd.bd_servicos.filter(bd_servicos => bd_servicos.room_service === room_service)
    }
}