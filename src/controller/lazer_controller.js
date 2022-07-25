import Lazer from "../model/lazer_model.js"


const lazer_controller = (app) => {
    const lazer_model = new Lazer ()
    app.get ('/lazer', (req, res) => {
        //const lazer = (message: "Essa chama a model")
        res.json ('teste lazer')
    })

app.post ('/lazer', (req, res) => {
    const body = req.body
    const atividades = new Lazer(body.faixaEtaria, body.nomeAtividade, body.idAtividade)
    atividades.escolherAtividades (atividades)
    res.json ({"lazer": atividades})
})
}

export default lazer_controller
