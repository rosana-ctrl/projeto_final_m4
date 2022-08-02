export const validaCardapio = (cardapio) => {
    if (cardapio) {
        if (cardapio != "strogonoff" && cardapio != "feijoada" && cardapio != "lasanha") {
            throw new Error("Insira um cardapio válido")
        }
    } else {
        throw new Error("Cárdapio não foi preenchido")
    }

}

export const validaBebida = (bebida) => {
    if (bebida) {
        if (bebida != "suco de laranja" && bebida != "coca-cola" && bebida != "água") {
            throw new Error("Insira uma bebida válida")
        }
    } else {
        throw new Error("Bebida não foi preenchida")
    }

}

export const validaCliente = (cliente) => {
    if (cliente) {
        if (cliente === 0) {
            throw new Error("Insira um nome")
        }
    } else {
        throw new Error("Cliente não foi preenchido")
    }

}



export const criaRestaurante = (cardapio, bebida, cliente)=>{
    validaCardapio(cardapio)
    validaBebida(bebida)
    validaCliente(cliente)

    return{
        "cardapio" : cardapio,
        "bebida" : bebida,
        "cliente" : cliente
    }
}