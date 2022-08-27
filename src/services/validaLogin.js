class ValidaHospede {
    constructor(email, senha) {
        this.email = ValidaHospede.validaEmail(email)
        this.senha = ValidaHospede.validaSenha(senha)
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



}

export default ValidaHospede