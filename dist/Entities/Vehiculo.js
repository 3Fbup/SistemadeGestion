export class Vehiculo {
    constructor(marca, modelo, velocidadMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadMaxima = velocidadMaxima;
    }
    getMarca() {
        this.marca = this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getModelo() {
        this.modelo = this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    getVelocidadMaxima() {
        this.velocidadMaxima = this.velocidadMaxima;
    }
    setVelocidadMaxima(velocidadMaxima) {
        this.velocidadMaxima = velocidadMaxima;
    }
    acelerar(velocidad) {
        console.log(velocidad + 'km');
    }
    frenar() {
        console.log('el vehiculo a frenado');
    }
}
