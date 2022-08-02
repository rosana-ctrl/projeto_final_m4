import dao from '../DAO/restauranteDAO.js'

const restauranteModel = {

    
    inserirRestaurante : async (cardapio)=>{
    return await dao.inserirRestaurante(cardapio)
    },
    
    pegaTodosRestaurante : async ()=>{
    return await dao.pegaTodosRestaurante()
    },

    pegaRestauranteCliente : async (cliente)=>{
        const restauranteAtual = await dao.pegaRestauranteCliente(cliente)
        console.log(restauranteAtual)
        if(restauranteAtual){
            const restauranteCliente = {
                "cliente" : restauranteAtual.cliente
            }
            return await dao.pegaRestauranteCliente(cliente,restauranteCliente)
        } else{
            throw new Error("Cliente não encontrado")
        }
        
    },

    pegaId:async (id)=>{
    return await dao.pegaId(id)
    },

    deletaRestaurante: async (id)=>{
        const restauranteAtual = await restauranteModel.pegaId(id)
        console.log(restauranteAtual)
        if(restauranteAtual){
            const restauranteDeletado = {
                "id" : restauranteAtual.id
            }
            return await dao.deletaRestaurante(id, restauranteDeletado)
        } else{
            throw new Error("ID não encontrado")
        }

    },

    atualizarCardapio : async (id, novosDados)=>{
        const restauranteAtual = await restauranteModel.pegaId(id)
        console.log(restauranteAtual)
        if(restauranteAtual){
            const restauranteAtualizado = {
                "cardapio" : novosDados.cardapio || restauranteAtual.cardapio,
                "bebida" : novosDados.bebida || restauranteAtual.bebida,
                "cliente" : novosDados.cliente || restauranteAtual.cliente
            }
            return await dao.atualizarCardapio(id, restauranteAtualizado)
        } else{
            throw new Error("Cardapio não encontrado")
        }

    },
}

export default restauranteModel