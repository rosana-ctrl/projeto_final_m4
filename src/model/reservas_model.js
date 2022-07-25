<<<<<<< HEAD
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
    
=======
import bd from '../database/bd.js'

let id=0

export default class Reservas {
    constructor(quarto, quantLeitos, frigobar, quantCrianças){
        this.id=id++;
        this.quarto = quarto; 
        this.quantLeitos=quantLeitos; // 1 a 4 leitos
        this.frigobar=frigobar; //Sim ou não
        this.quantCrianças = quantCrianças;
        this.quantAdultos = quantAdultos;
    }

    fazerReserva = () => {
        bd.reservas.push()
    }
 
>>>>>>> a342211707d33e023afc8d368fb1e70bcaffea78
}