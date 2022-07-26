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

}

export default Restaurante