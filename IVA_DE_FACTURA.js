//12:Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado. Luego, calcular y mostrar el monto total a pagar incluyendo el IVA.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: montoTotal=0, porcentajeIVA=0

(leer), calculo (proceso)

// Los calculos o procesos que se hacen con las

variables

// Proceso: calcular el monto total a pagar incluyendo el IVA

// La informacion de las variables procesadas

// Salida: montoTotalConIVA

// Seupdocodigo:

// Algoritmo calcularMontoTotalConIVA

// declarar

montoTotal=0, porcentajeIVA=0, montoTotalConIVA=0

// Escribir "Ingrese el monto total de la factura" /

// Leer montoTotal

// Escribir "Ingrese el porcentaje de IVA aplicado" /

// Leer porcentajeIVA

// Calcular montoTotalConIVA = montoTotal + (montoTotal * (porcentajeIVA / 100))

// Escribir "El monto total a pagar incluyendo el IVA es: " + montoTotalConIVA

// FinAlgoritmo

const read = require('prompt-sync')();

const write = console.log

// se crea la función

function calcularMontoTotalConIVA(){

    let montoTotal=0, porcentajeIVA=0, montoTotalConIVA=0

    montoTotal = parseFloat(read("Ingrese el monto total de la factura: "))
    porcentajeIVA = parseFloat(read("Ingrese el porcentaje de IVA aplicado: "))

    montoTotalConIVA = montoTotal + (montoTotal * (porcentajeIVA / 100))

    write("El monto total a pagar incluyendo el IVA es: " + montoTotalConIVA)

}

// se llama o se ejecuta la función

calcularMontoTotalConIVA()
