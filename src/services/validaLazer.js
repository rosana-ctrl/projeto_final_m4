let id = 0

class validacaoAtividade {
    constructor (nome_hospede, nome_atividade, dia_atividade) {
        this.id = id++;
        this.nome_hospede = nome_hospede;
        this.nome_atividade = nome_atividade;
        this.dia_atividade = dia_atividade;
    }
}

export default validacaoAtividade