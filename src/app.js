import express from 'express'
import hospedeController from '../src/controller/hospede_controller.js'

const app = express()
const port = 3009

app.use(express.json())

hospedeController(app)

app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`)
})