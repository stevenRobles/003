//9:Solicitar al usuario un número y mostrar si es divisible por 2.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: numero=0

(leer), comparacion (proceso selectivo)

// Los calculos o procesos que se hacen con las

variables

// Proceso: determinar si el número ingresado es divisible por 2

// La informacion de las variables procesadas

// Salida: resultado de la determinación

// Seupdocodigo:

// Algoritmo determinarDivisiblePor2

// declarar

numero=0

// Escribir "Ingrese un número" /

// Leer numero

// Si el residuo de dividir numero entre 2 es igual a 0 entonces

//    Escribir "El número es divisible por 2."

// De lo contrario

//    Escribir "El número no es divisible por 2."

// FinSi

// FinAlgoritmo

const read = require('prompt-sync')();

const write = console.log

// se crea la función

function determinarDivisiblePor2(){

    let numero=0

    numero = parseInt(read("Ingrese un número:"))

    if (numero % 2 === 0) {
        write("El número es divisible por 2.");
    } else {
        write("El número no es divisible por 2.");
    }

}

// se llama o se ejecuta la función

determinarDivisiblePor2()
