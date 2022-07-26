import express from 'express'
import hospedeController from '../src/controller/hospede_controller.js'
import reservasController from "./controller/reservas_controller.js";

const app = express()
const port = 3009

app.use(express.json())

hospedeController(app)
reservasController(app)

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})