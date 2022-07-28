let id_Hospede = 0

class ValidaHospede {
    constructor(nome, genero, nasc, email, telefone, senha) {
        this.id_Hospede = id_Hospede++
        this.nome = nome
        this.genero = this.validaGenero(genero)
        this.nasc = this.validaNasc(nasc)
        this.email = this.validaEmail(email)
        this.telefone = telefone
        this.senha = this.validaSenha(senha)
    }

    validaSenha = (senha) => {

        const regex = /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,15}$/

        if (senha) {
            if (senha.length >= 8) {
                return senha
            } else if (!regex.exec(senha)) {
                throw new Error("A senha precisa ter no minimo 8 e no máximo 15, 1 letra maiscula, 1 letra minuscula, 1 número e 1 caractere especial")
            }
        } else {
            throw new Error("Insira uma senha no minimo 8 e no máximo 15, 1 letra maiscula, 1 letra minuscula, 1 número e 1 caractere especial")
        }

    }

    validaEmail = (email) => {
        const regexEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/

        if (email) {
            if (regexEmail.exec(email)) {
                return email
            } else {
                throw new Error("Email inválido")
            }
        } else {
            throw new Error("Insira um email")
        }
    }

    validaGenero = (genero) => {
        const regexGenero = /F|M|NB|f|m|nb/

        if (genero) {
            if (regexGenero.exec(genero)) {
                return genero
            } else {
                throw new Error("Gênero inválido, use: F para feminino, M para masculino e NB para não binário")
            }
        } else {
            throw new Error("Insira um gênero")
        }
    }

    validaNasc = (nasc) => {
        const regexNasc = /([0-2][0-9]|3[0-1])\/(0[0-9]|1[0-2])\/[0-9]{4}/

        if (nasc) {
            if (regexNasc.exec(nasc)) {
                return nasc
            } else {
                throw new Error("Data inválida. Formato aceito DD/MM/AAA")
            }
        } else {
            throw new Error("Insira uma data")
        }
    }
    
    

}

export default ValidaHospede