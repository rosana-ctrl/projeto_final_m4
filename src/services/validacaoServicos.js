let idServicos = 1

class validacaoServicos {
    constructor(room_service, early_checkin, late_checkout, governanca, concierge) {
        // this.id = id++;
        this.room_service = room_service;
        this.early_checkin = this.validaData(early_checkin);
        this.late_checkout = this.validaData(late_checkout);
        this.governanca = governanca;
        this.concierge = concierge;
    }

    // validaServico = (dados) => {
    //     if (dados.room_service.length == 0 || dados.early_checkin.length == 0 || dados.late_checkout.length == 0 || dados.governanca.length == 0 || dados.concierge == 0) {
    //         throw new Error("o campo não pode ser vazio")
    //     } else {
    //         return dados
    //     }
    // }

    validaData = (dado) => {
        const regexNasc = /^([1-9]|([012][0-9])|(3[01]))\/([0]{0,1}[1-9]|1[012])\/([1-2][0-9][0-9][0-9]) [0-2][0-9]:[0-9][0-9]/

        if (dado || dado === null) {
            if (regexNasc.exec(dado)) {
                return dado
            } else {
                throw new Error("Data inválida. Formato aceito DD/MM/AAAA HH:MM")
            }
        } else {
            throw new Error("Insira uma data")
        }
    }
}

export default validacaoServicos