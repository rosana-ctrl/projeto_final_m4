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
 
}