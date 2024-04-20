//1:Pedir al usuario un número y mostrar si es mayor o menor que 10.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: numero=0

(leer), comparacion (proceso selectivo)

// Los calculos o procesos que se hacen con las

variables

// Proceso: comparar el número ingresado con 10 y mostrar si es mayor o menor

// La informacion de las variables procesadas

// Salida: resultado de la comparación

// Seupdocodigo:

// Algoritmo compararNumeroCon10

// declarar

numero=0

// Escribir "Ingrese un número" /

// Leer numero

// Si numero es mayor que 10 entonces

//    Escribir "El número es mayor que 10."

// De lo contrario

//    Escribir "El número es menor o igual que 10."

// FinSi

// FinAlgoritmo

const read = require('prompt-sync')();

const write = console.log

// se crea la función

function compararNumeroCon10(){

    let numero=0

    numero = parseFloat(read("Ingrese un número:"))

    if (numero > 10) {
        write("El número es mayor que 10.");
    } else {
        write("El número es menor o igual que 10.");
    }

}

// se llama o se ejecuta la función

compararNumeroCon10()
