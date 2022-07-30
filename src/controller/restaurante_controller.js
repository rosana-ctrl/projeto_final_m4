import restauranteModel from "../model/restaurante_model.js"

const hotelRestaurante = (app)=>{

app.get('/restaurante', async (req, res)=>{
        
const restaurante = await restauranteModel.pegaTodosRestaurante()
res.json({"restaurantes" : restaurante})
    })

app.get('/restaurante/cliente/:cliente', async (req, res)=>{
const cliente = req.params.cliente

const restaurante = await restauranteModel.pegaRestauranteCliente(cliente)

res.json({"restaurante" : restaurante,
              "erro" : false}
        )
})

app.post('/restaurante',async (req, res)=>{

const body = req.body
        
const restaurante = await restauranteModel.inserirRestaurante(body)
        
res.json(restaurante)
})
app.delete('/restaurante/id/:id', async (req,res)=>{
const id = req.params.id

const restaurante = await restauranteModel.deletaRestaurante(id)
    
res.json(restaurante)    
})
app.put('/restaurante/id/:id',async (req, res)=>{
    const body = req.body
    const id = req.params.id
    try {
        const restaurante = await restauranteModel.atualizarCardapio(id,body)
        res.json({
            "msg" : `Cardapio ${restaurante.cardapio} atualizado com sucesso`,
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