import Restaurante from "../model/restaurante_model.js"

const hotelRestaurante = (app)=>{

app.get('/restaurante', (req, res)=>{
        
const restaurante = new Restaurante()
res.json({"restaurante" : restaurante.pegarRestaurante()})
    })

app.get('/restaurante/cardapio/:cardapaio', (req, res)=>{
const restaurante = new Restaurante()

const cardapio = req.params.cardapio

const pegarCardapio = restaurante.pegaUm(cardapio)

res.json({"tarefa" : pegarCardapio,
              "erro" : false}
        )
})

app.post('/restaurante', (req, res)=>{

const body = req.body
        
const restaurante = new Restaurante(body.cardapio, body.bebida,body.cliente)
        
restaurante.inserirRestaurante(restaurante)

res.json({"msg" : "Cardapio inserido com sucesso",
          "restaurante" : restaurante,})
})
app.delete('/restaurante/cardapio/:cardapio', (req,res)=>{

const restaurante = new Restaurante()
    
const cardapio = req.params.cardapio
    
restaurante.deletarCardapio(cardapio)
            
res.json({"msg" : `Pedido ${cardapio} deletado com sucesso`,
              "erro" : false})    
})
app.put('/restaurante/cardapio/:cardapio', (req, res)=>{
    const body = req.body
    const cardapio = req.params.cardapio
    try {
        const restaurante = new Restaurante(body.cardapio, body.bebida,body.cliente)
        restaurante.atualizarPedido(cardapio, restaurante)
        res.json({
            "msg" : `Cardapio ${cardapio} atualizado com sucesso`,
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