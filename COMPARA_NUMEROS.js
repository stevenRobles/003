//5:Pedir al usuario dos números y mostrar si son iguales o diferentes.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: numero1=0, numero2=0

(leer), comparacion (proceso selectivo)

// Los calculos o procesos que se hacen con las

variables

// Proceso: determinar si los dos números ingresados son iguales o diferentes

// La informacion de las variables procesadas

// Salida: resultado de la determinación

// Seupdocodigo:

// Algoritmo determinarIgualdad

// declarar

numero1=0, numero2=0

// Escribir "Ingrese el primer número" /

// Leer numero1

// Escribir "Ingrese el segundo número" /

// Leer numero2

// Si numero1 es igual a numero2 entonces

//    Escribir "Los números son iguales."

// De lo contrario

//    Escribir "Los números son diferentes."

// FinSi

// FinAlgoritmo

const read = require('prompt-sync')();

const write = console.log

// se crea la función

function determinarIgualdad(){

    let numero1=0, numero2=0

    numero1 = parseFloat(read("Ingrese el primer número:"))

    numero2 = parseFloat(read("Ingrese el segundo número:"))

    if (numero1 === numero2) {
        write("Los números son iguales.");
    } else {
        write("Los números son diferentes.");
    }

}

// se llama o se ejecuta la función

determinarIgualdad()
