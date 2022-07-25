import banco from "../database/bd.js"

class Lazer {
    constructor (faixaEtaria, nomeAtividade, idAtividade) {
        this.faixaEtaria = faixaEtaria
        this.nomeAtividade = nomeAtividade
        this.idAtividade = idAtividade
    }
    escolherAtividades = (bancoAtividades) => {
        banco.bancoAtividades.push (bancoAtividades)
    }
}

export default Lazer

