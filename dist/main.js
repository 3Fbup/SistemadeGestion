import { Coche } from "./Entities/Coche.js";
import { Moto } from "./Entities/Moto.js";
const vehiculos = [];
vehiculos.push(new Coche('mazda', 'cx5', 210, 5));
vehiculos.push(new Coche('toyota', 'corolla', 180, 4));
vehiculos.push(new Coche('ford', 'mustang', 250, 2));
vehiculos.push(new Coche('honda', 'civic', 200, 4));
vehiculos.push(new Coche('chevrolet', 'camaro', 240, 2));
vehiculos.push(new Moto('yamaha', 'mt-07', 180, 'deportivo'));
vehiculos.push(new Moto('honda', 'cb500', 160, 'touring'));
vehiculos.push(new Moto('kawasaki', 'ninja', 240, 'deportivo'));
vehiculos.push(new Moto('suzuki', 'gsx-r', 220, 'deportivo'));
vehiculos.push(new Moto('ducati', 'monster', 200, 'sport'));
vehiculos.forEach(function (vehiculo) {
    console.log('el vehiculo', vehiculo.marca, '', vehiculo.modelo, 'aumento su velocidad');
    vehiculo.acelerar(15);
    vehiculo.frenar();
});
