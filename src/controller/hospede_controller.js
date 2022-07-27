import HospedeModel from "../model/hospede_model.js";
import ValidaHospede from "../services/validaHospede.js";

const hospedeController = (app) => {

    const hospedeModel = new HospedeModel()

    app.get('/hospede', (req, res) => {

        const hospedesTodos = hospedeModel.pegaHospedes()

        res.json(
            {
                'hospedes': hospedesTodos,
                'erro': false
            }
        )
    })

    app.get('/hospede/email/:email', (req, res) => {
        const email = req.params.email

        const hospede = hospedeModel.pegaUmHospede(email)
        
        res.json(
            {"hospede": hospede,
             "erro" : false}
        )
    })

    app.post('/hospede', (req, res) => {
        const body = req.body
        try {
            const novoHospede = new ValidaHospede(body.nome, body.email, body.senha)
            
            hospedeModel.addNovoHospede(novoHospede)

            res.json(
                {
                    'msg':"Hóspede inserido com sucesso",
                    'hospede': novoHospede,
                    'erro': false
                }
            )
        } catch (e) {
            res.json(
                {
                    'msg': e.message,
                    'erro': true
                }
            )
        }        
    })

    app.delete('/hospede/email/:email', (req, res) => {
        const email = req.params.email
        hospedeModel.deletaUmHospede(email)
        res.json({
            'mensagem': `${email} foi com deus`,
            "erro" : false
        })
    })

    app.put('/hospede/email/:email', (req, res) => {
        const email = req.params.email
        hospedeModel.atualizaUmHospede(email)
        res.json({
            'mensagem': `${email} atualizado`,
            "erro" : false
        })
    })
}

export default hospedeController
