import Lazer from "../model/lazer_model.js"
import lazerDao from "../DAO/lazer_DAO.js"
import validacaoAtividade from "../services/validaLazer.js"
import db from "../database/db-sqlite.js"

const lazer_controller = (app) => {
    const lazerModel = new Lazer ()    
    
    app.get ('/lazer', async(req, res) => {
        res.json (await lazerDao.pegarTodosLazer(db))
    })

    app.get('/lazer/atividades/:atividade', async (req, res) => {
        const atividade = req.params.nome_atividade
        try {
            const nome_atividade = await lazerModel.pegaUmaAtividade(atividade)
            res.json(nome_atividade)
        } catch (error) {
            res.json({
                "msg" : error.message,
                "erro" : true
            })
        }
    })

    app.get('/lazer/atividades/:hospede', async (req, res) => {
        const atividade = req.params.nome_hospede
        try {
            const nome_hospede = await lazerModel.pegaUmNome(atividade)
            res.json(nome_hospede)
        } catch (error) {
            res.json({
                "msg" : error.message,
                "erro" : true
            })
        }
    })

    app.get('/lazer/atividades/:data', async (req, res) => {
        const atividade = req.params.dia_atividade
        try {
            const dia_atividade = await lazerModel.pegaUmaData(atividade)
            res.json(dia_atividade)
        } catch (error) {
            res.json({
                "msg" : error.message,
                "erro" : true
            })
        }
    })

app.post ('/lazer', async(req, res) => {
    const body = req.body
    try {
        const resposta = await lazerModel.insereAtividade(body)

        res.json (resposta)

    } catch (error) {
        res.json({
            "msg" : error.message,
            "erro" : true
        }) 
    }
})

app.delete ('/lazer/atividades/:atividade', async (req, res) => {
    const nome_atividade = req.params.nome_atividade
    try {
        const resposta = await lazerModel.deletaAtividade(nome_atividade)
        res.json(resposta)
    } catch (error) {
        res.json(error)
    }

})

app.put ('/lazer/atividades/:atividade', async (req, res) => {
    const body = req.body
    const nome_atividade = req.params.nome_atividade
    try {
        const novoDados = new validacaoAtividade(body.nome_hospede, body.nome_atividade, body.dia_atividade)
        const resposta = await lazerModel.atualizaAtividade(nome_atividade, novoDados)
        res.json(resposta)

    } catch (error) {
        res.json(error)
    }
})


}



export default lazer_controller

