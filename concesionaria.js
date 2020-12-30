///Clases
class Vehiculo {
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
    mostrarMM() {
        return `${this.marca} ${this.modelo}`;
    }
    precioFormal() {
        return precioFormal(this.precio.toFixed(2));
    }
}

class Auto extends Vehiculo {
    constructor(marca, modelo, puertas, precio) {
        super(marca, modelo, precio);
        this.puertas = puertas;
    }
    mostrar() {
        return `Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: ${this.precioFormal()}`;
    }
}

class Moto extends Vehiculo {
    constructor(marca, modelo, cilindrada, precio) {
        super(marca, modelo, precio);
        this.cilindrada = cilindrada;
    }
    mostrar() {
        return `Marca: ${this.marca} // Modelo: ${this.modelo} // Cilindrada: ${this.cilindrada}cc // Precio: ${this.precioFormal()}`;
    }
}

///Funciones auxiliares
function compare(a, b) {
    let c = 0;
    const pA = a.precio;
    const pB = b.precio;
    if (pA < pB) {
        c = 1;
    }
    else if (pA > pB) {
        c = -1;
    }
    return c;

}

function precioFormal(a) {
    let p = '', flag = 0;
    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] == '.') {
            p += ',';
            flag = 0;
        }
        else {
            p += a[i];
            flag++;
            if (flag == 3)
                p += '.';
        }

    }
    p += '$';

    let palabra = '';
    for (let i = p.length - 1; i >= 0; i--) {
        palabra += p[i];
    }
    return palabra;
}
function buscarY(lista) {
    let pos = -1;
    for (let i = 0; i < lista.length; i++) {
        let model = lista[i].modelo.toUpperCase();
        if (model.indexOf("Y") != -1)
            pos = i;
    }
    return pos;
}
///Carga de Datos
const primerAuto = new Auto('Peugeot', '206', 4, 200000.00);
const segundoAuto = new Auto('Peugeot', '208', 5, 250000.00);
const primeraMoto = new Moto('Honda', 'Titan', 125, 60000.00);
const segundaMoto = new Moto('Yamaha', 'YBR', 160, 80500.50);
const separador = '===========================================';

let lista = [primerAuto, primeraMoto, segundoAuto, segundaMoto];

///Muestra por consola
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i].mostrar());
}

console.log(separador);

lista.sort(compare);
console.log(`Vehículo más caro: ${lista[0].mostrarMM()}`);
console.log(`Vehículo más barato: ${lista[lista.length - 1].mostrarMM()}`);
let pos = buscarY(lista);

if (pos != -1)
    console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${lista[pos].mostrarMM()} ${lista[pos].precioFormal()}`)

console.log(separador);

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i].mostrarMM());
}