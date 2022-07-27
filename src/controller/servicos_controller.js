import Servicos from "../model/servicos_model.js"

const servicosController = (app) => {

    app.get('/servicos', (req, res) => {
        const servico = new Servicos()

        res.json({
            "msg": servico,
            "erro": false
        })
    })

    app.post('/servicos', (req, res) => {
        try {
            const body = req.body
            const servico = new Servicos(body.room_service, body.early_checkin, body.late_checkout, body.governanca, body.concierge)
            servico.solicitarServico(servico);
            res.json({
                "msg": servico,
                "erro": false
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })
    app.delete('/servico/room_service/:room_service', (req, res) => {
        const room_service = req.params.room_service
        Servicos.deletaServico(room_service)
        res.json({
            'mensagem': `${room_service} serviço deletado`,
            "erro": false
        })
    })

    app.put('/servico/room_service/:room_service', (req, res) => {
        const room_service = req.params.room_service
        Servicos.atualizaServico(room_service)
        res.json({
            'mensagem': `${room_service} serviço atualizado`,
            "erro": false
        })
    })
}

export default servicosController