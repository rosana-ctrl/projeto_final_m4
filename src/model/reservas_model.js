import bd from '../database/bd.js'
export default class Reservas{

    insereReserva = (bd_reservas)=>{
        bd.bd_reservas.push(bd_reservas)
    }

    pegaReservas = ()=>{
        return bd.bd_reservas
    }

    pegaUmaReserva = (quarto)=>{
        return bd.bd_reservas.filter(bd_reservas=>bd_reservas.quarto===quarto)
    }

    deletaReserva = (quarto)=>{
        const newDB = bd.bd_reservas.filter(bd_reservas=>bd_reservas.quarto!==quarto)
        bd.bd_reservas = newDB
    }

    atualizaReserva = (quarto, novosDados)=>{
        const newDb = bd.bd_reservas.map(bd_reservas=>{
            if(bd_reservas.quarto === quarto){
                return {
                    "id": bd_reservas.id,
                    "quarto" : novosDados.quarto || bd_reservas.quarto,
                    "quantLeitos" : novosDados.quantLeitos || bd_reservas.quantLeitos,
                    "frigobar" : novosDados.frigobar || bd_reservas.frigobar,
                    "dataEntrada" : novosDados.dataEntrada || bd_reservas.dataEntrada,
                    "dataSaida" : novosDados.dataSaida || bd_reservas.dataSaida
                }
            }
            return bd_reservas
        })

        bd.bd_reservas = newDb

    }
}


