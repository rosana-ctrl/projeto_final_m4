import bd from '../database/bd.js'

export default class HospedeModel {

    // add novo hospede no bd
    addNovoHospede = (hospede) => {
        bd.bd_hospedes.push(hospede)
    }

    // pegar todos os hospedes
    pegaHospedes = () => {
        return bd.bd_hospedes
    }

    pegaUmHospede = (email) => {
        return bd.bd_hospedes.filter(bd_hospedes => bd_hospedes.email === email)
    }

    deletaUmHospede = (email) => {
        //metodo somente para testar caminho
        return bd.bd_hospedes.filter(bd_hospedes => bd_hospedes.email === email)
    }

    atualizaUmHospede = (email) => {
        //metodo somente para testar caminho
        return bd.bd_hospedes.filter(bd_hospedes => bd_hospedes.email === email)
    }
}