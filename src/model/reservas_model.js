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
        try{
            let resposta = await reservasDAO.pegaUmaReserva(quarto)
            if(resposta.length != 0){
                return {
                    "mensage": resposta,
                    "erro": true
                }
            } else {
                return {
                    "mensagem": `Reserva do quarto ${quarto} não encontrada`,
                    "erro":false
                }
            }
        } catch (error) {
            throw error
        }
    }

    deletaReserva = async (quarto) => {
        return await reservasDAO.deletaReserva(quarto)
    }

    atualizaReserva = async (quarto, novosDados) => {
        const reservaModel = new Reservas ()
        const reservaAntiga = await reservaModel.pegaUmaReserva(quarto)
        if (reservaAntiga) {
            const reservaAtualizada = {
                "quarto": novosDados.quarto || reservaAntiga.quarto,
                "quantLeitos": novosDados.quantLeitos || reservaAntiga.quantLeitos,
                "frigobar": novosDados.frigobar || reservaAntiga.frigobar,
                "dataEntrada": novosDados.dataEntrada || reservaAntiga.dataEntrada,
                "dataSaida": novosDados.dataSaida || reservaAntiga.dataSaida
            }
            return await reservasDAO.atualizaReserva(quarto, reservaAtualizada)

        } else {
            throw new Error("Serviço não encontrado")
        }
    }
}

