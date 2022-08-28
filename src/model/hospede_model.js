import Dao from "../DAO/hospedeDAO.js"

export default class HospedeModel {


    // add novo hospede no bd
    addNovoHospede = async (hospede) => {
        const dao = new Dao()
        return await dao.insereHospede(hospede)
    }

    // pegar todos os hospedes
    pegaHospedes = async () => {
        const dao = new Dao()
        return await dao.pegaTodosHospedes()
    }

    verificarLogin = async (email, senha) => {
        const dao = new Dao()
        const hospedeAtual = await dao.verificarLogin(email, senha)

        if (hospedeAtual) {
            return {
                "email": hospedeAtual.email,
                "id": hospedeAtual.id_Hospede

            }

        } else {
            throw new Error("Hospede não encontrado")
        }
    }

    pegaUmHospedeEmail = async (email) => {
        const dao = new Dao()
        const hospedeAtual = await dao.pegaHospedeEmail(email)

        if (hospedeAtual) {
            const hospedeBuscado = {
                "email": hospedeAtual.email
            }
            return await dao.pegaHospedeEmail(email, hospedeBuscado)
        } else {
            throw new Error("Hospede não encontrado")
        }
    }

    pegaHospedeId = async (id_Hospede) => {
        const dao = new Dao()
        return await dao.pegaHospedeId(id_Hospede)
    }

    deletaUmHospede = async (id_Hospede) => {
        const dao = new Dao()
        const hospedeModel = new HospedeModel()
        const hospedeAtual = await hospedeModel.pegaHospedeId(id_Hospede)

        if (hospedeAtual) {
            const hospedeDeletado = {
                "email": hospedeAtual.email
            }
            return await dao.deletaHospede(id_Hospede, hospedeDeletado)
        } else {
            throw new Error("Hospede não encontrado")
        }


    }

    atualizaUmHospede = async (id_Hospede, novosDados) => {
        const dao = new Dao()
        const hospedeModel = new HospedeModel()
        const hospedeAtual = await hospedeModel.pegaHospedeId(id_Hospede)
        console.log(hospedeAtual)

        if (hospedeAtual) {
            const hospedeAtualizado = {
                "nome": novosDados.nome || hospedeAtual.nome,
                "genero": novosDados.genero || hospedeAtual.genero,
                "nasc": novosDados.nasc || hospedeAtual.nasc,
                "email": novosDados.email || hospedeAtual.email,
                "celular": novosDados.celular || hospedeAtual.celular,
                "senha": novosDados.senha || hospedeAtual.senha
            }
            return await dao.atualizaHospede(id_Hospede, hospedeAtualizado)
        } else {
            throw new Error("Hospede não encontrado")
        }
    }
}