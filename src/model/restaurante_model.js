import dao from '../DAO/restauranteDAO.js'

const restauranteModel = {

    
    inserirRestaurante : async (cardapio)=>{
        return await dao.inserirRestaurante(cardapio)
    },

    
    pegaTodosRestaurante : async ()=>{
        return await dao.pegaTodosRestaurante()
    },

    pegaRestauranteCliente : async (cliente)=>{
        return await dao.pegaRestauranteCliente(cliente)
    },

    pegaId : async (id)=>{
        return await dao.pegaId(id)
    },

    deletaRestaurante: async (id)=>{
        return await dao.deletaRestaurante(id)
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