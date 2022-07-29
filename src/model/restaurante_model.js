import banco from '../database/bd.js'
let id_restaurante = 0
class Restaurante {
    constructor(cardapio, bebida,cliente){
        this.id_restaurante = id_restaurante++;
        this.cardapio = cardapio;
        this.bebida = bebida;
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
    atualizarPedido = (cardapio, novos)=>{
    const newDb = banco.restaurante.map(restaurante=>{
    if(restaurante.cardapio === cardapio){
    return {
            "id" : restaurante.id,
            "cardapio" : novos.cardapio || restaurante.cardapio,
            "bebidas" : novos.bebida || restaurante.bebida,
            "cliente" : novos.cliente || restaurante.cliente
                }
            }return restaurante
        })
        banco.restaurante = newDb
    }

}


export default Restaurante