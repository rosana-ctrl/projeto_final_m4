import Reservas from "../model/reservas_model.js"
import ValidacaoReserva from "../services/validacaoReservas.js"

const reservasController = (app)=>{
    const modelReservas = new Reservas()
    app.get('/reservas', (req, res)=>{

        const todasReservas = modelReservas.pegaReservas()
        res.json({
            "Reservas" : todasReservas,
            "erro" : false
        })
    })

    app.get('/reservas/quarto/:quarto', (req, res)=>{

        const quarto = req.params.quarto
        const bd_reservas = modelReservas.pegaUmaReserva(quarto)
      
        res.json(
            {"Reserva": bd_reservas,
             "erro" : false}
        )
    })

    app.post('/reservas', (req, res)=>{
        const body = req.body
        try {
            const novaReserva = new ValidacaoReserva(body.quarto, body.quantLeitos, body.frigobar, body.dataEntrada, body.dataSaida)
            modelReservas.insereReserva(novaReserva)
            res.json(
                {"msg" : "Reserva inserida com sucesso",
                "Reserva" : novaReserva,
                "erro" : false}
            )
            
        } catch (error) {
            res.json(
                {"msg" : error.message,
                 "erro" : true}
            )
        }

    })

    app.delete('/reservas/quarto/:quarto', (req,res)=>{
        const quarto = req.params.quarto
        modelReservas.deletaReserva(quarto)
        res.json({
            "msg" : `Reserva do quarto ${quarto} deletada com sucesso`,
            "erro" : false
        })
    })

    app.put('/reservas/quarto/:quarto', (req, res)=>{
        const body = req.body
        const quarto = req.params.quarto
        try {
            const novosDados = new ValidacaoReserva(body.quarto, body.quantLeitos, body.frigobar, body.dataEntrada, body.dataSaida)
            modelReservas.atualizaReserva(quarto, novosDados)
            res.json({
                "msg" : `Reserva do quarto ${quarto} atualizada com sucesso`,
                "Reserva" : novosDados,
                "erro" : false
            })

        } catch (error) {
            res.json({
                "msg" : error.message,
                "erro" : true
            })
        }
    })
}

export default reservasController