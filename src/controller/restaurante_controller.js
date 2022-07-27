import Restaurante from "../model/restaurante_model.js"

const hotelRestaurante = (app)=>{

app.get('/restaurante', (req, res)=>{
        
const restaurante = new Restaurante()
res.json({"restaurante" : restaurante.pegarRestaurante()})
    })

app.get('/restaurante/pedido/:pedido', (req, res)=>{
const restaurante = new Restaurante()

const pedido = req.params.pedido

const pegarPedido = restaurante.pegaUm(pedido)

res.json({"tarefa" : pegarPedido,
              "erro" : false}
        )
})

app.post('/restaurante', (req, res)=>{

const body = req.body
        
const restaurante = new Restaurante(body.pedido, body.cardapio, body.bebidas,body.cliente)
        
restaurante.inserirRestaurante(restaurante)

res.json({"msg" : "Serviço selecionado com sucesso",
          "restaurante" : restaurante,})
})
app.delete('/restaurante/pedido/:pedido', (req,res)=>{

const restaurante = new Restaurante()
    
const pedido = req.params.pedido
    
restaurante.deletarCardapio(pedido)
            
res.json({"msg" : `Pedido ${pedido} deletado com sucesso`,
              "erro" : false})    
})
app.put('/restaurante/pedido/:pedido', (req, res)=>{
    const body = req.body
    const pedido = req.params.pedido
    try {
        const restaurante = new Restaurante(body.pedido, body.cardapio, body.bebidas,body.cliente)
        restaurante.atualizarPedido(pedido, restaurante)
        res.json({
            "msg" : `Pedido ${pedido} atualizado com sucesso`,
            "erro" : false
        })

    } catch (error) {
        res.json({
            "msg" : error.message,
            "erro" : true
        })
    }
})
}

export default hotelRestaurante