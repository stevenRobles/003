//10:Pedir al usuario un número y mostrar si es mayor, menor o igual a 100.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: numero=0

(leer), comparacion (proceso selectivo)

// Los calculos o procesos que se hacen con las

variables

// Proceso: determinar si el número ingresado es mayor, menor o igual a 100

// La informacion de las variables procesadas

// Salida: resultado de la determinación

// Seupdocodigo:

// Algoritmo determinarMayorMenorIgual100

// declarar

numero=0

// Escribir "Ingrese un número" /

// Leer numero

// Si numero es mayor que 100 entonces

//    Escribir "El número es mayor que 100."

// Si numero es menor que 100 entonces

//    Escribir "El número es menor que 100."

// De lo contrario

//    Escribir "El número es igual a 100."

// FinSi

// FinAlgoritmo

const read = require('prompt-sync')();

const write = console.log

// se crea la función

function determinarMayorMenorIgual100(){

    let numero=0

    numero = parseInt(read("Ingrese un número:"))

    if (numero > 100) {
        write("El número es mayor que 100.");
    } else if (numero < 100) {
        write("El número es menor que 100.");
    } else {
        write("El número es igual a 100.");
    }

}

// se llama o se ejecuta la función

determinarMayorMenorIgual100()
