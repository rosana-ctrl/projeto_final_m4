import reservasDAO from '../DAO/reservasDAO.js'
import ValidacaoReserva from '../services/validacaoReservas.js'
export default class Reservas {

    insereReserva = async (reserva) => {
        try {
            const novaReserva = new ValidacaoReserva(reserva.quarto, reserva.quantLeitos, reserva.frigobar, reserva.dataEntrada, reserva.dataSaida)
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

    pegaUmaReserva = async (quarto) => {
        return await reservasDAO.pegaUmaReserva(quarto)
    }

    deletaReserva = async (quarto) => {
        return await reservasDAO.deletaReserva(quarto)
    }

    atualizaReserva = async (quarto, novosDados) => {
       try {
        const resposta = await reservasDAO.atualizaReserva(quarto,novosDados)
        return {
            "mensagem": messagem,
            "status":200
        }
       } catch (error) {
        return {
            "mensagem": error.message,
            "status":400
        }
       }

    }
}


