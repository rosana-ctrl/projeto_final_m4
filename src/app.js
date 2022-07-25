import express from 'express'

import lazer_controller from "../src/controller/lazer_controller.js"

const app = express()
const port = 3009

app.use(express.json())

lazer_controller (app)


app.listen (port, () => {
    console.log(`http://localhost: ${port}/`)
})