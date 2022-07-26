import reservasDAO from '../DAO/reservasDAO.js'
import ValidacaoReserva from '../services/validacaoReservas.js'
export default class Reservas {

    insereReserva = async (reserva) => {
        try {
            const novaReserva = new ValidacaoReserva(...Object.values(reserva))
            return await reservasDAO.insereReserva(novaReserva)
        } catch (error) {
            return {
                "msg": error.message,
                "erro": true
            }
        }
    }

    pegaReservas = async () => {
        return await reservasDAO.pegaTodasReservas()
    }

    pegaUmaReserva = async (id) => {
        try {
            let resposta = await reservasDAO.pegaUmaReserva(id)
            if (resposta.length != 0) {
                return {
                    "mensage": resposta,
                    "erro": true
                }
            } else {
                return {
                    "mensagem": `Reserva do quarto de ${id} não encontrada`,
                    "erro": false
                }
            }
        } catch (error) {
            throw error
        }
    }

    pegaReservasHospede = async (id) => {
        try {
            let resposta = await reservasDAO.pegaReservasHospede(id)
            if (resposta.length != 0) {
                return {
                    "mensage": resposta,
                    "erro": true
                }
            } else {
                return {
                    "mensagem": `Reservas do hóspede ${id} não encontrada`,
                    "erro": false
                }
            }
        } catch (error) {
            throw error
        }
    }

    deletaReserva = async (id) => {

        let resposta = await reservasDAO.pegaUmaReserva(id)
        if (resposta.length != 0) {
            let resposta = await reservasDAO.deletaReserva(id)
            return {
                "mensage": `Reserva do quarto de ${id} deletada com sucesso`,
                "erro": true
            }
        } else {
            return {
                "mensagem": `Reserva do quarto de  ${id} não encontrada`,
                "erro": false
            }
        }

    }

    atualizaReserva = async (id, novosDados) => {
        const reservaModel = new Reservas()
        const reservaAntiga = await reservaModel.pegaUmaReserva(id)
        if (reservaAntiga) {
            const reservaAtualizada = {
                "idhospede": novosDados.idhospede || reservaAntiga.idhospede,
                "quarto": novosDados.quarto || reservaAntiga.quarto,
                "quantLeitos": novosDados.quantLeitos || reservaAntiga.quantLeitos,
                "quantAdultos": novosDados.quantAdultos || reservaAntiga.quantAdultos,
                "quantCrian": novosDados.quantCrian || reservaAntiga.quantCrian,
                "dataEntrada": novosDados.dataEntrada || reservaAntiga.dataEntrada,
                "dataSaida": novosDados.dataSaida || reservaAntiga.dataSaida
            }
            return await reservasDAO.atualizaReserva(id, reservaAtualizada)

        } else {
            throw new Error("Serviço não encontrado")
        }
    }
}