import { Vehiculo } from "./Vehiculo.js";
export class Coche extends Vehiculo {
    constructor(marca, modelo, velocidadMaxima, numeroPuertas) {
        super(marca, modelo, velocidadMaxima);
        this.numeroPuertas = numeroPuertas;
    }
    acelerar(velocidad) {
        console.log(velocidad + ' km');
    }
    frenar() {
        console.log('el coche se detuvo');
    }
}
