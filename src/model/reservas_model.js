import reservasDAO from '../DAO/reservasDAO.js'
import ValidacaoReserva from '../services/validacaoReservas.js'
export default class Reservas {

    insereReserva = async (reserva) => {
        try {
            const novaReserva = new ValidacaoReserva(reserva.quarto, reserva.quantLeitos, reserva.frigobar, reserva.dataEntrada, reserva.dataSaida)
            reservasDAO.insereReserva(novaReserva)
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

    pegaUmaReserva = async (quarto) => {
        return await reservasDAO.pegaUmaReserva(quarto)
    }

    deletaReserva = async (quarto) => {
        return await reservasDAO.deletaReserva(quarto)
    }

    atualizaReserva = async (quarto, novosDados) => {
        const reservaAtualizada = await reservasDAO.atualizaReserva(novosDados => {
            if (reservaAtualizada.quarto === quarto) {
                return {
                    "id_reserva": reservaAtualizada.id_reserva,
                    "quarto": novosDados.quarto || reservaAtualizada.quarto,
                    "quantLeitos": novosDados.quantLeitos || reservaAtualizada.quantLeitos,
                    "frigobar": novosDados.frigobar || reservaAtualizada.frigobar,
                    "dataEntrada": novosDados.dataEntrada || reservaAtualizada.dataEntrada,
                    "dataSaida": novosDados.dataSaida || reservaAtualizada.dataSaida
                }
            }
            return reservaAtualizada
        })

        reservasDAO.atualizaReserva = reservaAtualizada

    }
}


