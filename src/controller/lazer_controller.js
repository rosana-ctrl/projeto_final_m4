import Lazer from "../model/lazer_model.js"
import lazerDao from "../DAO/lazer_DAO.js"
import validacaoAtividade from "../services/validaLazer.js"
import db from "../database/db-sqlite.js"

const lazer_controller = (app) => {
    const lazerModel = new Lazer ()    
    
    app.get ('/lazer', async(req, res) => {
        res.json (await lazerDao.pegarTodosLazer(db))
    })

    app.get('/lazer/atividades/:nome_Atividade', async (req, res)=>{
        const nome_Atividade = req.params.nome_Atividade

        try {
            const resposta = await lazerModel.pegaUmaAtividade(nome_Atividade)
            if(resposta.status===200){
                res.status(resposta.status).json({
                    "usuario": resposta.dados,
                    "erro" : false
                })   
            }else{
                res.status(resposta.status).json({
                    "mensagem": resposta.mensagem,
                    "erro" : true
                }) 
            }
            
        } catch (error) {
            res.status(500).json({
                "mensagem": error.message,
                "erro" : true
            })
        }
    })

    app.get('/lazer/atividades/:id', async (req, res)=>{
        const id = req.params.id

        try {
            const resposta = await usuarioModel.pegaUmId(id)
            if(resposta.status===200){
                res.status(resposta.status).json({
                    "usuario": resposta.dados,
                    "erro" : false
                })   
            }else{
                res.status(resposta.status).json({
                    "mensagem": resposta.mensagem,
                    "erro" : true
                }) 
            }
            
        } catch (error) {
            res.status(500).json({
                "mensagem": error.message,
                "erro" : true
            })
        }
    })
    

    app.post('/lazer', async (req, res)=>{
        const body = req.body
        try {            
           
                const resposta = await lazerModel.insereAtividade(body)

                res.json({
                    "mensagem": resposta.mensagem,
                    })  
                
            
                        
        } catch (error) {
            res.json({
                "mensagem": error.message,
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
    const atividade = req.params.atividade
    try {
        const novoDados = new validacaoAtividade (body.nome_hospede, body.nome_atividade, body.dia_atividade)
        const resposta = await lazerModel.atualizaAtividade(atividade, novoDados)
        res.json({
            "Atividade": resposta,
                    "erro": false
        })

    } catch (error) {
        res.json(error)
    }
})


}



export default lazer_controller

