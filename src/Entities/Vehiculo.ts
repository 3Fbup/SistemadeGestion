
import { IVehiculo } from "../interfaces/IVehiculo.js";

export class Vehiculo implements IVehiculo {
    public marca: string
    modelo: string
    velocidadMaxima: number

    constructor(marca: string, modelo: string, velocidadMaxima: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadMaxima = velocidadMaxima;
    }

    public getMarca() {
        this.marca = this.marca;
    }

    public setMarca(marca: string) {
        this.marca = marca;
    }

    public getModelo() {
        this.modelo = this.modelo;
    }

    public setModelo(modelo: string) {
        this.modelo = modelo;
    }

    public getVelocidadMaxima() {
        this.velocidadMaxima = this.velocidadMaxima;
    }

    public setVelocidadMaxima(velocidadMaxima: number) {
        this.velocidadMaxima = velocidadMaxima;
    }

    acelerar(velocidad: number): void {
        console.log(velocidad + 'km');

    }

    frenar(): void {
        console.log('el vehiculo a frenado');
        
    }

}