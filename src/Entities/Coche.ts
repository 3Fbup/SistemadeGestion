import { Vehiculo } from "./Vehiculo.js";

export class Coche extends Vehiculo {

    protected numeroPuertas: number;

    constructor(marca: string, modelo: string, velocidadMaxima: number, numeroPuertas: number) {
        super(marca, modelo, velocidadMaxima);
        this.numeroPuertas = numeroPuertas;
    }

    acelerar(velocidad: number): void {
        console.log(velocidad + ' km');
    }

    frenar(): void {
        console.log('el coche se detuvo');

    }

}