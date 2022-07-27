let id_reserva = 0

class ValidacaoReserva {
    constructor(quarto, quantLeitos, frigobar, dataEntrada, dataSaida){
        this.id_reserva = id_reserva++
        this.quarto = quarto
        this.quantLeitos = quantLeitos
        this.frigobar = frigobar
        this.dataEntrada = dataEntrada
        this.dataSaida = dataSaida
        // this.dataSaida = this.validaSaida(dataSaida)
    }

    // validaSaida = (dataSaida)=>{
    //     if(dataSaida){
    //         if(dataSaida<this.dataEntrada){
    //             return dataSaida
    //         }else{
    //             throw new Error("A data de saída precisa ser maior que a data de entrada")
    //         }
    //     }else{
    //         throw new Error("Insira uma data de saída posterior a data de entrada")
    //     }

    // }
}

export default ValidacaoReserva
