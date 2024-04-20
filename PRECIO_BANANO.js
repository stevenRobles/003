//17:La asociación de vinicultores tiene como política fijar un precio inicial al kilo de banano, la cual se clasifica en tipos A y B, y además en tamaños 1 y 2. Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por el banano que entrega en un embarque, considerando lo siguiente:
Si es de tipo A, se le cargan $2 al precio inicial cuando es de tamaño 1; y $3 si es de tamaño 2.
Si es de tipo B, se rebajan $3 cuando es de tamaño 1, y $5 cuando es de tamaño 2.
Realice un algoritmo para determinar la ganancia obtenida.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: 
//    tipoBanano (A o B), 
//    tamañoBanano (1 o 2), 
//    precioInicial (fijado por la asociación)

(leer), calculo (proceso), comparacion (proceso selectivo)

// Los calculos o procesos que se hacen con las variables:

// Proceso: 
//    Si tipoBanano es A entonces
//        Si tamañoBanano es 1 entonces
//            precioFinal = precioInicial + 2
//        Sino
//            precioFinal = precioInicial + 3
//    Sino
//        Si tamañoBanano es 1 entonces
//            precioFinal = precioInicial - 3
//        Sino
//            precioFinal = precioInicial - 5

// Salida: precioFinal

// Seudocódigo:

// Algoritmo calcularGananciaBanano

//    Declarar tipoBanano, tamañoBanano, precioInicial, precioFinal

//    Escribir "Ingrese tipo de banano (A o B):"
//    Leer tipoBanano

//    Escribir "Ingrese tamaño de banano (1 o 2):"
//    Leer tamañoBanano

//    Escribir "Ingrese precio inicial del kilo de banano:"
//    Leer precioInicial

//    Si tipoBanano es A entonces
//        Si tamañoBanano es 1 entonces
//            precioFinal = precioInicial + 2
//        Sino
//            precioFinal = precioInicial + 3
//    Sino
//        Si tamañoBanano es 1 entonces
//            precioFinal = precioInicial - 3
//        Sino
//            precioFinal = precioInicial - 5

//    Escribir "La ganancia obtenida es de: $" + precioFinal

// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function calcularGananciaBanano(){
    let tipoBanano, tamañoBanano, precioInicial, precioFinal;

    tipoBanano = read("Ingrese tipo de banano (A o B): ");
    tamañoBanano = parseInt(read("Ingrese tamaño de banano (1 o 2): "));
    precioInicial = parseFloat(read("Ingrese precio inicial del kilo de banano: "));

    if (tipoBanano === 'A') {
        if (tamañoBanano === 1) {
            precioFinal = precioInicial + 2;
        } else {
            precioFinal = precioInicial + 3;
        }
    } else {
        if (tamañoBanano === 1) {
            precioFinal = precioInicial - 3;
        } else {
            precioFinal = precioInicial - 5;
        }
    }

    write("La ganancia obtenida es de: $" + precioFinal);
}

calcularGananciaBanano();
