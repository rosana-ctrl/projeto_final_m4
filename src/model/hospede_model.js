import bd from '../database/bd.js'

export default class HospedeModel {
    
    // add novo hospede no bd
    addNovoHospede = (hospede) => {
        bd.hospede_tabela.push(hospede)
    }

    // pegar todos os hospedes
    pegaHospedes = () => {
        return bd.hospede_tabela
    }
}