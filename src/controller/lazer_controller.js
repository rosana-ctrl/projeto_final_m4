import Lazer from "../model/lazer_model.js"


const lazer_controller = (app) => {
    const lazer_model = new Lazer ()
    app.get ('/lazer', (req, res) => {
        //const lazer = ("message: Essa chama a model")
        res.json ('teste lazer')
    })

app.post ('/lazer', (req, res) => {
    const body = req.body
    try {
        const atividades = new Lazer(body.faixaEtaria, body.nomeAtividade, body.idAtividade)
        atividades.escolherAtividades (atividades)
        res.json ({"lazer": atividades})
    } catch (error) {
        res.json(
            {"msg" : error.message,
            "erro" : true}
        ) 
    }
})

app.delete ('/lazer/atividades/:atividades', (req,res)=>{
    const ativ = req.params.ativ
    lazer_model.deletaAtividade(ativ)

    res.json({
        "msg" : `Tarefa com titulo ${ativ} deletada com sucesso`,
        "erro" : false
    })
})

}



export default lazer_controller
