import express from "express";

import reservasController from "./controller/reservas_controller.js";

const app = express ()

const port = 3009

reservasController(app)

app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`);
})