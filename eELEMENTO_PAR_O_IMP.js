//3:Pedir al usuario un número y mostrar si es par o impar.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: numero=0

(leer), comparacion (proceso selectivo)

// Los calculos o procesos que se hacen con las

variables

// Proceso: determinar si el número ingresado es par o impar

// La informacion de las variables procesadas

// Salida: resultado de la determinación

// Seupdocodigo:

// Algoritmo determinarParImpar

// declarar

numero=0

// Escribir "Ingrese un número" /

// Leer numero

// Si el residuo de dividir numero entre 2 es igual a 0 entonces

//    Escribir "El número es par."

// De lo contrario

//    Escribir "El número es impar."

// FinSi

// FinAlgoritmo

const read = require('prompt-sync')();

const write = console.log

// se crea la función

function determinarParImpar(){

    let numero=0

    numero = parseInt(read("Ingrese un número:"))

    if (numero % 2 === 0) {
        write("El número es par.");
    } else {
        write("El número es impar.");
    }

}

// se llama o se ejecuta la función

determinarParImpar()
