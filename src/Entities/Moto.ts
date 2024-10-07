import { Vehiculo } from "./Vehiculo.js";

export class Moto extends Vehiculo {

    protected tipoManillar: string;

    constructor(marca: string, modelo: string, velocidadMaxima: number, tipoManillar: string) {
        super(marca, modelo, velocidadMaxima);
        this.tipoManillar = tipoManillar;
    }

    acelerar(velocidad: number): void {
        console.log('velocidad aumento' + velocidad + ' km mas');
    }

    frenar(): void {
        console.log('la moto se detuvo');

    }

}