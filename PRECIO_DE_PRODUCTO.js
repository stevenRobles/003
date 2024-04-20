//13:Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. Calcular y mostrar el precio final luego de aplicar el descuento.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: precioProducto=0, porcentajeDescuento=0

(leer), calculo (proceso)

// Los calculos o procesos que se hacen con las

variables

// Proceso: calcular el precio final luego de aplicar el descuento

// La informacion de las variables procesadas

// Salida: precioFinal

// Seupdocodigo:

// Algoritmo calcularPrecioFinalConDescuento

// declarar

precioProducto=0, porcentajeDescuento=0, precioFinal=0

// Escribir "Ingrese el precio del producto" /

// Leer precioProducto

// Escribir "Ingrese el porcentaje de descuento aplicado" /

// Leer porcentajeDescuento

// Calcular precioFinal = precioProducto - (precioProducto * (porcentajeDescuento / 100))

// Escribir "El precio final luego de aplicar el descuento es: " + precioFinal

// FinAlgoritmo

const read = require('prompt-sync')();

const write = console.log

// se crea la función

function calcularPrecioFinalConDescuento(){

    let precioProducto=0, porcentajeDescuento=0, precioFinal=0

    precioProducto = parseFloat(read("Ingrese el precio del producto: "))
    porcentajeDescuento = parseFloat(read("Ingrese el porcentaje de descuento aplicado: "))

    precioFinal = precioProducto - (precioProducto * (porcentajeDescuento / 100))

    write("El precio final luego de aplicar el descuento es: " + precioFinal)

}

// se llama o se ejecuta la función

calcularPrecioFinalConDescuento()
