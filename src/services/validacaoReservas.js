let id = 21

class ValidacaoReserva {
    constructor(quarto, quantLeitos, frigobar, dataEntrada, dataSaida){
        this.id = id++
        this.quarto = quarto
        this.quantLeitos = quantLeitos
        this.frigobar = frigobar
        this.dataEntrada = dataEntrada
        this.dataSaida = this.validaSaida(dataSaida)
    }

validaSaida = (dataSaida, dataEntrada) => {
        const dataEntradaSplit = this.dataEntrada.split('/');
        const dayEnt = Number(dataEntradaSplit[0])
        const monthEnt = Number(dataEntradaSplit[1]) - 1
        const yearEnt = Number(dataEntradaSplit[2])

        const newDataEnt = (`${yearEnt},${monthEnt},${dayEnt}`)
        dataEntrada = new Date(newDataEnt)

        const dataSaidaSplit = dataSaida.split('/');
        const daySaida = Number(dataSaidaSplit[0])
        const monthSaida = Number(dataSaidaSplit[1]) - 1
        const yearSaida = Number(dataSaidaSplit[2])

        const newDataSai = (`${yearSaida},${monthSaida},${daySaida}`)
        dataSaida = new Date(newDataSai)

        const data1 = dataEntrada.getTime();
        const data2 = dataSaida.getTime()

        const diff = Math.sign(data2 - data1)

        const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
        if (dataSaida) {
            if (days <= 0) {
                throw new Error("A data de saída precisa ser maior que a data de entrada")
            } else {
                return dataSaida
            }
        } else {
            throw new Error("Insira uma data de saída posterior a data de entrada")
        }
    }
}

export default ValidacaoReserva
