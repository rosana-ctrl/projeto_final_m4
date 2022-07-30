import Servicos from "../model/servicos_model.js"
import validacaoServicos from "../services/validacaoServicos.js"

const servicosController = (app) => {
    const modelServicos = new Servicos

    app.get('/servicos', (req, res) => {
        try {
            const todosServicos = await modelServicos.pegaServico()

            res.json(
                todosServicos)
        } catch (error) {
            res.json(error)

        }
    })

    app.post('/servicos', (req, res) => {
        const body = req.body
        try {
            const servico = await modelServicos.solicitaServico(id)
            res.json(servico)
        } catch (error) {
            res.json(error.message)
        }
    })

    app.delete('/servicos/id/:servico', (req, res) => {
        try {
            const servico = await modelServicos.deletaServico(id)

            res.json(servico)
        } catch (error) {
            res.json(error.message)
        }

    })

    app.put('/servicos/id/:servico', (req, res) => {
        const body = req.body
        const id = req.params.id
        try {

            const novoServico = new validacaoServicos(body.room_service, body.early_checkin, body.late_checkout, body.governanca, body.concierge)
            const servico = await modelServicos.atualizaServico(id)
            res.json(servico)
        } catch (error) {
            res.json(error.message)
        }
    })
}

export default servicosController