import Restaurante from "../model/restaurante_controller.js"

const hotelRestaurante = (app)=>{

app.get('/restaurante', (req, res)=>{
        
const restaurante = new Restaurante()
res.json({"restaurante" : restaurante.garRestaurante})
    })

app.post('/restaurante', (req, res)=>{

const body = req.body
        
const restaurante = new Restaurante(body.pedido, body.cardapio, body.bebidas,body.cliente)
        
restaurante.inserirRestaurante(restaurante)

res.json({"msg" : "Serviço selecionado com sucesso",
          "restaurante" : restaurante,})
    })
}

export default hotelRestaurante