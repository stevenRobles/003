//11:Solicitar al usuario un número y mostrar si es un número de un solo dígito.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: numero=0

(leer), comparacion (proceso selectivo)

// Los calculos o procesos que se hacen con las

variables

// Proceso: determinar si el número ingresado es un número de un solo dígito

// La informacion de las variables procesadas

// Salida: resultado de la determinación

// Seupdocodigo:

// Algoritmo determinarUnSoloDigito

// declarar

numero=0

// Escribir "Ingrese un número" /

// Leer numero

// Si numero es mayor o igual que 0 y menor o igual que 9 entonces

//    Escribir "El número es un número de un solo dígito."

// De lo contrario

//    Escribir "El número no es un número de un solo dígito."

// FinSi

// FinAlgoritmo

const read = require('prompt-sync')();

const write = console.log

// se crea la función

function determinarUnSoloDigito(){

    let numero=0

    numero = parseInt(read("Ingrese un número:"))

    if (numero >= 0 && numero <= 9) {
        write("El número es un número de un solo dígito.");
    } else {
        write("El número no es un número de un solo dígito.");
    }

}

// se llama o se ejecuta la función

determinarUnSoloDigito()
