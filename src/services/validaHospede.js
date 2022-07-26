let id_Hospede = 0

class ValidaHospede {
    constructor(nome, email, senha) {
        this.id_Hospede = id_Hospede++
        this.nome = nome
        this.email = email
        this.senha = senha
    }
}

export default ValidaHospede