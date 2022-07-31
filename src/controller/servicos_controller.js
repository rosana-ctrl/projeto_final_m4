import Servicos from "../model/servicos_model.js"
import validacaoServicos from "../services/validacaoServicos.js"

const servicosController = (app) => {
    const modelServicos = new Servicos

    app.post('/servicos', async (req, res) => {
        try {
            let servico = await modelServicos.insereServico(req.body)
            res.json({
                "msg": "Serviço inserido com sucesso"
            })
            //todo: retornar id do registro inserido
        } catch (error) {
            res.json(error.message)
        }
    })

    app.put('/servicos/id/:id', async (req, res) => {
        const body = req.body
        const id = req.params.id
        try {
            let servico = await modelServicos.atualizaServico(id, body)
            res.json({
                "msg": "Serviço atualizado com sucesso"
            })
        } catch (error) {
            res.json(error.message)
        }
    })

    app.get('/servicos', async (req, res) => {
        try {
            let resposta = await modelServicos.pegaTodosServicos()

            res.status(resposta.status).json({
                "usuarios": resposta.dados,
                "total": resposta.total,
                "erro": false
            })
        } catch (error) {
            res.status(500).json({
                "mensagem": error.mensagem,
                "erro": true
            })
        }
    })

    app.get('/servico/id/:id', async (req, res) => {
        try {
            let todosServicos = await modelServicos.pegaServico(req.params.id)

            res.json(
                todosServicos)
        } catch (error) {
            res.json(error)
        }
    })

    app.delete('/servicos/id/:id', async (req, res) => {
        try {
            let servico = await modelServicos.deletaServico(req.params.id)
            res.json(servico)
        } catch (error) {
            res.json(error.message)
        }
    })
}

export default servicosController