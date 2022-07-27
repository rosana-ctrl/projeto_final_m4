import banco from '../database/bd.js'

class Restaurante {
    constructor(pedido, cardapio, bebidas,cliente){
        this.pedido = pedido;
        this.cardapio = cardapio;
        this.bebidas = bebidas;
        this.cliente = cliente;
    }

    inserirRestaurante = (restaurante)=>{
        banco.restaurante.push(restaurante)
    }
    pegarRestaurante = ()=>{
        return banco.restaurante
    }
    pegaUm = (pedido)=>{
        return banco.restaurante.filter(restaurante=>restaurante.pedido === pedido)
    }

    deletarCardapio = (pedido)=>{
        const newDB = banco.restaurante.filter(restaurante=>restaurante.pedido ==!pedido)
        banco.restaurante = newDB
    }
    atualizarPedido = (pedido, novos)=>{
    const newDb = banco.restaurante.map(restaurante=>{
    if(restaurante.pedido === pedido){
    return {
            "pedido" : novos.pedido || restaurante.pedido,
            "cardapio" : novos.cardapio || restaurante.cardapio,
            "bebidas" : novos.bebidas || restaurante.bebidas,
            "cliente" : novos.cliente || restaurante.cliente
                }
            }return restaurante
        })
        banco.restaurante = newDb
    }

}


export default Restaurante