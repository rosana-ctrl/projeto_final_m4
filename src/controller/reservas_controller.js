import Reservas from "../model/reservas_model.js"

const reservasController = (app) => {
    const modelReservas = new Reservas()
    app.get('/reservas', async (req, res) => {
        try {
            const todasReservas = await modelReservas.pegaReservas()
            res.json(todasReservas)
        } catch (error) {
            res.json(error)
        }
    })

    app.get('/reservas/quarto/:quarto', async (req, res) => {
        const quarto = req.params.quarto
        try {
            const reserva = await modelReservas.pegaUmaReserva(quarto)
            res.json(reserva)
        } catch (error) {
            res.json(error)
        }
    })

    app.post('/reservas', async (req, res) => {
        const body = req.body
        try {
            const resposta = await modelReservas.insereReserva(body)
            res.json(resposta)
        } catch (error) {
            res.json(error)
        }

    })

    app.delete('/reservas/quarto/:quarto', async (req, res) => {
        const quarto = req.params.quarto
        try {
            const resposta = await modelReservas.deletaReserva(quarto)
            res.json(resposta)
        } catch (error) {
            res.json(error)
        }

    })

    app.put('/reservas/quarto/:quarto', async (req, res) => {
        const body = req.body
        const quarto = req.params.quarto
        try {
            const {status,mensagem} = await modelReservas.atualizaReserva(quarto)
            if(status === 404) {
                res.status(404).json({
                    "mensagem":mensagem,
                    "erro": true
                })
            } else {
                const resposta = await modelReservas.atualizaReserva(quarto,body)
                res.status(resposta.status).json({
                    "mensagem": resposta.mensagem,
                    "erro":false
                })
            }
        } catch (error) {
            res.status(500).json ({
                "mensagem": error.mensage,
                "erro":true
            })
        }
    })
}

export default reservasController