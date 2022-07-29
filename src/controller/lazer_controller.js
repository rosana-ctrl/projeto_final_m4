import Lazer from "../model/lazer_model.js"
import lazerDao from "../DAO/lazer_DAO.js"
import db from "../database/db-sqlite.js"

const lazer_controller = (app) => {
    const lazerModel = new Lazer ()    
    
    app.get ('/lazer', async(req, res) => {
        res.json (await lazerDao.pegarTodosLazer(db))
    })

    app.get('/lazer/atividades/:atividade', async (req, res) => {
        const atividade = req.params.atividade
        try {
            const atividade = await lazerModel.pegaUmaAtividade(atividade)
            res.json(atividade)
        } catch (error) {
            res.json(error)
        }
    })

app.post ('/lazer', async(req, res) => {
    const body = req.body
    try {
        const resposta = await lazerModel.insereLazer(body)

        res.json (resposta)

    } catch (error) {
        res.json({
            "msg" : error.message,
            "erro" : true
        }) 
    }
})

app.delete ('/lazer/atividades/:atividade', async (req, res) => {
    const atividade = req.params.atividade
    try {
        const resposta = await lazerModel.deletaAtividade(atividade)
        res.json(resposta)
    } catch (error) {
        res.json(error)
    }

})

app.put ('/lazer/atividades/:atividade', async (req, res) => {
    const body = req.body
    const atividade = req.params.atividade
    try {
        const novaValidacao = new ValidacaoAtividade(body.hospede, body.atividade, body.data)
        const resposta = await modelReservas.atualizaAtividade(atividade, novaValidacao)
        res.json(resposta)

    } catch (error) {
        res.json(error)
    }
})


}



export default lazer_controller

