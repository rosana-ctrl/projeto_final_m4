class validacaoServicos {
    constructor(room_service, early_checkin, late_checkout, governanca, concierge) {
        if (early_checkin &&
            this.validaDataPassada(early_checkin)
        ) {
            throw new Error("Data inválida.")
        }

        if (late_checkout &&
            this.validaDataPassada(late_checkout)
        ) {
            throw new Error("Data inválida.")
        }
        this.room_service = room_service;
        this.early_checkin = early_checkin;
        this.late_checkout = late_checkout;
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

    validaDataPassada = (date) => {
        let splittedDate = date.split(' ');
        let givenDate = splittedDate[0].split('/');
        givenDate = givenDate[2] + '-' + givenDate[1] + '-' + givenDate[0] + ' ' + splittedDate[1];
        givenDate = new Date(givenDate);

        let today = new Date();
        today.setHours(0, 0, 0, 0);

        try {
            return givenDate < today;
        } catch {
            throw new Error("Data inválida.")
        }
    }
}


export default validacaoServicos