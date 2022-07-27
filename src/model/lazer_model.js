import bd from "../database/bd.js"
import banco from "../database/bd.js"

class Lazer {
    constructor (faixaEtaria, nomeAtividade, idAtividade) {
        this.faixaEtaria = faixaEtaria
        this.nomeAtividade = nomeAtividade
        this.idAtividade = idAtividade
    }
    escolherAtividades = (bancoAtividades) => {
        bd.bancoAtividades.push (bancoAtividades)
    }

    deletaAtividade = (ativ)=>{
        const newbd = bd.bancoAtividades.filter(atividades => atividades.ativ !== ativ)
        bd.bancoAtividades = newbd
    }
}


export default Lazer

