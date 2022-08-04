class ValidaHospede {
    constructor(nome, genero, nasc, email, celular, senha) {
        this.nome = ValidaHospede.validaNome(nome)
        this.genero = ValidaHospede.validaGenero(genero)
        this.nasc = ValidaHospede.validaNasc(nasc)
        this.email = ValidaHospede.validaEmail(email)
        this.celular = ValidaHospede.validaCelular(celular)
        this.senha = ValidaHospede.validaSenha(senha)
    }

    static validaNome = (nome) => {        
            if (nome.length == 0) {
                throw new Error("O campo NOME não pode ficar vazio")
            } else {
                return nome
            }
    }

    static validaCelular = (celular) => {
        const regexT = /^\([1-9]{2}\) 9[1-9]{1}[0-9]{3}\-[0-9]{4}$/

        if (celular) {
            if (regexT.exec(celular)) {
                return celular
            } else {
                throw new Error("Número de celular inválido. Use o formato (xx) xxxxx-xxxx")
            }
        } else {
            throw new Error("Insira um celular no formato (xx) xxxxx-xxxx")
        }

    }

    static validaSenha = (senha) => {

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

    static validaEmail = (email) => {
        const regexEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/

        if (email) {
            if (regexEmail.exec(email)) {
                return email
            } else {
                throw new Error("Email inválido. Por favor, insira um email válido")
            }
        } else {
            throw new Error("Insira um email")
        }
    }

    static validaGenero = (genero) => {
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

    static validaNasc = (nasc) => {
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