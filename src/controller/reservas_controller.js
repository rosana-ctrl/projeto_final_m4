import Reservas from "../model/reservas_model.js"
import ValidacaoReserva from "../services/validacaoReservas.js"

const reservasController = (app) => {
    const modelReservas = new Reservas()
    app.get('/reservas', async (req, res) => {
        try {
            const todasReservas = await modelReservas.pegaReservas()
            res.json(todasReservas)
        } catch (error) {
            res.status(400).json(error)
        }
    })

    app.get('/reservas/:id', async (req, res) => {
        const id = req.params.id
        try {
            let reserva = await modelReservas.pegaUmaReserva(id)
            res.json(reserva)
        } catch (error) {
            res.status(400).json(error)
        }
    })

    app.get('/reservas/hospede/:id', async (req, res) => {
        const id = req.params.id
        try {
            let reserva = await modelReservas.pegaReservasHospede(id)
            res.json(reserva)
        } catch (error) {
            res.status(400).json(error)
        }
    })

    app.post('/reservas', async (req, res) => {
        const body = req.body
        try {
            const resposta = await modelReservas.insereReserva(body)
            res.json(resposta)
        } catch (error) {
            res.status(400).json(error)
        }

    })

    app.delete('/reservas/:id', async (req, res) => {
        const id = req.params.id
        try {
            const resposta = await modelReservas.deletaReserva(id)
            res.json(resposta)
        } catch (error) {
            res.status(404).json({
                "mensagem": error.message,
                "erro": true
            })
        }

    })


    app.put('/reservas/:id', async (req, res) => {
        const body = req.body
        const id = req.params.id
        try {
            const novosDados = new ValidacaoReserva(body.id_Hospede, body.quarto, body.quantLeitos, body.quantAdultos, body.quantCrian, body.dataEntrada, body.dataSaida)
            await modelReservas.atualizaReserva(id, novosDados)
            res.json({
                "msg": "Reserva Atualizada com sucesso",
                "reserva": novosDados,
                "erro": false
            })

        } catch (error) {
            res.status(404).json({
                "msg": error.message,
                "erro": true
            })
        }
    })
}

export default reservasController