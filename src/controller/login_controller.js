import ValidaLogin from "../services/validaLogin.js";
import LoginModel from "../model/login_model.js"


const loginController = (app) => {

    const loginModel = new LoginModel()

    app.post('/login', async (req, res) => {
        const body = req.body
        try {
            const login = new ValidaLogin(body.email, body.senha)

            await loginModel.addNovoLogin(login)

            res.json({
                'msg': "Login efetuado com sucesso",
                'login': login,
                'erro': false
            })
        } catch (error) {
            res.json({
                'msg': error.message,
                'erro': true
            })
        }
    })



}

export default loginController