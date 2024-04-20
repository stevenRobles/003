//15.

Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación. Si el año de fabricación es anterior a 2010, aplicar un descuento del 10% sobre el precio de venta y mostrar el precio final.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: 
//    precioVenta=0.0 (leer), 
//    anioFabricacion=0 (leer), 
//    descuento=0 (calcular), 
//    precioFinal=0 (calculado)

// Los calculos o procesos que se hacen con las variables:

// Proceso: 
//    Si anioFabricacion < 2010 entonces
//        descuento = precioVenta * 0.10
//    Sino
//        descuento = 0
//    precioFinal = precioVenta - descuento

// Salida: 
//    precioFinal

// Seudocódigo:

// Algoritmo ventaVehiculo

//    Declarar precioVenta=0.0, anioFabricacion=0, descuento=0, precioFinal=0.0

//    Escribir "Ingrese Precio Venta:"
//    Leer precioVenta

//    Escribir "Ingrese Año Fabricación:"
//    Leer anioFabricacion

//    Si anioFabricacion < 2010
//        Entonces
//            descuento = precioVenta * 0.10
//        Sino
//            descuento = 0
//    FinSi

//    precioFinal = precioVenta - descuento

//    Escribir "Precio Venta: " + precioVenta + " - Descuento: " + descuento + ": Precio Final: " + precioFinal

// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function ventaVehiculo(){
    let precioVenta = 0.0;
    let anioFabricacion = 0;
    let descuento = 0;
    let precioFinal = 0.0;

    precioVenta = parseFloat(read("Ingrese Precio Venta: "));
    anioFabricacion = parseInt(read("Ingrese Año Fabricación: "));

    if (anioFabricacion < 2010) {
        descuento = precioVenta * 0.10;
    } else {
        descuento = 0;
    }

    precioFinal = precioVenta - descuento;

    write("Precio Venta: " + precioVenta + " - Descuento: " + descuento + ": Precio Final: " + precioFinal);
}

ventaVehiculo();
