// import bd from '../database/bd.js'

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

    pegaUmHospedeEmail = async (email) => {
        const dao = new Dao()
        return await dao.pegaHospedeEmail(email)
    }

    pegaHospedeId = async (id_Hospede) => {
        const dao = new Dao()
        return await dao.pegaHospedeId(id_Hospede)
    }

    deletaUmHospede = async (id_Hospede) => {
        const dao = new Dao()
        return await dao.deletaHospede(id_Hospede)
    }

    atualizaUmHospede = async (id_Hospede, novosDados) => {
        const dao = new Dao()
        const hospedeAtual = await HospedeModel.pegaHospedeId(id_Hospede)
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