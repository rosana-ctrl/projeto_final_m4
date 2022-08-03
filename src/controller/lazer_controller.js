import Lazer from "../model/lazer_model.js"
import lazerDao from "../DAO/lazer_DAO.js"
import db from "../database/db-sqlite.js"

const lazer_controller = (app) => {
    const lazerModel = new Lazer ()    
    
    app.get ('/lazer', async(req, res) => {
        res.json (await lazerDao.pegarTodosLazer(db))
    })

    app.get('/lazer/atividades/:nome_Hospede', async (req, res)=>{
        const nome_Hospede = req.params.nome_Hospede

        try {
            const resposta = await lazerModel.pegaUmNome(nome_Hospede)
            if(resposta.status===200){
                res.status(resposta.status).json({
                    "Hospede": resposta.dados,
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

    app.delete ('/lazer/atividades/:id', async (req, res) => {
        const id = req.params.id
        try {
            const resposta = await lazerModel.deletaAtividade(id)        
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

app.put('/lazer/atividades/:id',async (req, res)=>{
    const body = req.body
    const id = req.params.id
    try {
        const lazer = await lazerModel.atualizarAtividade(id, body)
        res.json({
            "msg" : `Atividade para hospede no Id ${id} foi atualizada com sucesso`,
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



export default lazer_controller