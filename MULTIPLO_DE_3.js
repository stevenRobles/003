//8:Pedir al usuario un número y mostrar si es múltiplo de 3.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: numero=0

(leer), comparacion (proceso selectivo)

// Los calculos o procesos que se hacen con las

variables

// Proceso: determinar si el número ingresado es múltiplo de 3

// La informacion de las variables procesadas

// Salida: resultado de la determinación

// Seupdocodigo:

// Algoritmo determinarMultiploDe3

// declarar

numero=0

// Escribir "Ingrese un número" /

// Leer numero

// Si el residuo de dividir numero entre 3 es igual a 0 entonces

//    Escribir "El número es múltiplo de 3."

// De lo contrario

//    Escribir "El número no es múltiplo de 3."

// FinSi

// FinAlgoritmo

const read = require('prompt-sync')();

const write = console.log

// se crea la función

function determinarMultiploDe3(){

    let numero=0

    numero = parseInt(read("Ingrese un número:"))

    if (numero % 3 === 0) {
        write("El número es múltiplo de 3.");
    } else {
        write("El número no es múltiplo de 3.");
    }

}

// se llama o se ejecuta la función

determinarMultiploDe3()
