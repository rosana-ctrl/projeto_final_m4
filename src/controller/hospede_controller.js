import HospedeModel from "../model/hospede_model.js";
import ValidaHospede from "../services/validaHospede.js";

const hospedeController = (app) => {

    const hospedeModel = new HospedeModel()

    app.get('/hospede', async (req, res) => {
        try {
            const hospedesTodos = await hospedeModel.pegaHospedes()
            res.json(
                {
                    'hospedes': hospedesTodos,
                    'erro': false
                }
            )
        } catch (error) {
            res.json(
                {
                    "msg": error.message,
                    "erro": true
                }
            )
        }

    })

    app.get('/hospede/email/:email', async (req, res) => {
        const email = req.params.email

        try {
            const hospede = await hospedeModel.pegaUmHospedeEmail(email)
            res.json(
                {
                    "hospede": hospede,
                    "erro": false
                }
            )
        } catch (error) {
            res.json(
                {
                    "msg": error.message,
                    "erro": true
                }
            )
        }
    })

    app.post('/hospede', async (req, res) => {
        const body = req.body
        try {
            const novoHospede = new ValidaHospede(body.nome, body.genero, body.nasc, body.email, body.celular, body.senha)

            await hospedeModel.addNovoHospede(novoHospede)

            res.json(
                {
                    'msg': "Hóspede inserido com sucesso",
                    'hospede': novoHospede,
                    'erro': false
                }
            )
        } catch (error) {
            res.json(
                {
                    'msg': error.message,
                    'erro': true
                }
            )
        }
    })

    app.delete('/hospede/id/:id_Hospede', async (req, res) => {
        const id_Hospede = req.params.id_Hospede
        try {
            await hospedeModel.deletaUmHospede(id_Hospede)
            res.json({
                'mensagem': `Hospede com id ${id_Hospede} foi com deus`,
                "erro": false
            })
        } catch (error) {
            res.json(
                {
                    'msg': error.message,
                    'erro': true
                }
            )
        }
    })

    app.put('/hospede/id/:id_Hospede', async (req, res) => {
        const id_Hospede = req.params.id_Hospede
        const body = req.body
        try {
            const hospedeValidado = new ValidaHospede(body.nome, body.genero, body.nasc, body.email, body.celular, body.senha)
            await hospedeModel.atualizaUmHospede(id_Hospede, hospedeValidado)
            res.json({
                'mensagem': `Hospede com id ${id_Hospede} atualizado com sucesso`,
                "hospede": hospedeValidado,
                "erro": false
            })
        } catch (error) {
            res.json(
                {
                    'msg': error.message,
                    'erro': true
                }
            )
        }
    })

    app.patch('/hospede/senha/id/:id_Hospede', async (req, res) =>{
        const id_Hospede = req.params.id_Hospede
        const body = req.body
        const validacao = new ValidaHospede()
        const validaSenha = validacao.validaSenha()
        try {
            validaSenha(body.senha)
            await hospedeModel.atualizaUmHospede(id_Hospede, {"senha": body.senha})
            res.jason({
                "mensagem": "Senha atualizada",
                "erro": false
            })
        } catch (error) {
            res.json(
                {
                    'msg': error.message,
                    'erro': true
                }
            )
        }
    })
}

export default hospedeController
