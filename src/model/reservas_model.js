import bd from '../database/bd.js'

let id=0

export default class Reservas {
    constructor(quarto, quantLeitos, frigobar, dataEntrada, dataSaida){
        this.id=id++;
        this.quarto = quarto; 
        this.quantLeitos=quantLeitos; // 1 a 4 leitos
        this.frigobar=frigobar; //Sim ou não
        this.dataEntrada=dataEntrada;
        this.dataSaida-dataSaida
    }

    fazerReserva = () => {
        bd.reservas.push()
    }
    
}