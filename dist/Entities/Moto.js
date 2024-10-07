import { Vehiculo } from "./Vehiculo.js";
export class Moto extends Vehiculo {
    constructor(marca, modelo, velocidadMaxima, tipoManillar) {
        super(marca, modelo, velocidadMaxima);
        this.tipoManillar = tipoManillar;
    }
    acelerar(velocidad) {
        console.log('velocidad aumento' + velocidad + ' km mas');
    }
    frenar() {
        console.log('la moto se detuvo');
    }
}
