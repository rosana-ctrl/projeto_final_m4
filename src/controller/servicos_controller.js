import Servicos from "../model/servicos_model.js"
import validacaoServicos from "../services/validacaoServicos.js"

const servicosController = (app) => {
    const modelServicos = new Servicos
    app.get('/servicos', (req, res) => {
        const todosServicos = modelServicos.pegaServico()

        res.json({
            "msg": todosServicos,
            "erro": false
        })
    })

    app.post('/servicos', (req, res) => {
        const body = req.body
        try {

            const servico = new validacaoServicos(body.room_service, body.early_checkin, body.late_checkout, body.governanca, body.concierge)
            modelServicos.solicitaServico(servico);
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
    app.delete('/servicos/room_service/:room_service', (req, res) => {
        const room_service = req.params.room_service
        modelServicos.deletaServico(room_service)
        res.json({
            'mensagem': `${room_service} serviço deletado`,
            "erro": false
        })
    })

    app.put('/servicos/room_service/:room_service', (req, res) => {
        const body = req.body
        try {

            const servico = new validacaoServicos(body.room_service, body.early_checkin, body.late_checkout, body.governanca, body.concierge)
            modelServicos.atualizaServico(servico);
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
}

export default servicosController