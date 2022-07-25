let id = 0

class ValidaHospede {
    constructor (nome, email, senha){
        this.id = id++
        this.nome = nome
        this.email = email
        this.senha = senha
    }
}

export default ValidaHospede