import Reservas from "../model/reservas_model.js"

const reservasController = (app) => {
    const reservas = new Reservas()
    app.get('/reservas', (req, res) => {
        res.json({
            "reservas": reservas,
            'erro': false
        }
        )
    })

    app.post('/reservas', (req, res) => {
        const body = req.body
        try {
            const reserva = new Reservas(body.quarto, body.quantLeitos, body.frigobar, body.dataEntrada, body.dataSaida)
            reserva.fazerReserva(reserva)

            res.json(
                {
                    "reservas": reserva,
                    "erro": false
                }
            )

        } catch (error) {
            res.json(
                {
                    "msg": error.message,
                    "erro": true
                }
            )
        }
    })
}

export default reservasController