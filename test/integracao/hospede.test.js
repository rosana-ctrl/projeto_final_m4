import app from '../../src/app.js'
import request from 'supertest'

const mock = {
    "nome": "Jane Doe",
	"genero": "F",
	"nasc": "19/11/1990",
	"email": "jane@gmail.com",
	"celular": "(21) 99745-8972",
	"senha": "456!aBcD"
}

describe("Testando rotas hospede", ()=>{
    test("Rota POST", async ()=>{
        const resp = await request(app).post('/hospede')
        .send(mock)
        expect(resp.status).toBe(200)
    })

    test("Rota GET", async ()=>{
        const resp = await request(app).get(`/hospede/`)
        expect(resp.status).toBe(200)
    })
})