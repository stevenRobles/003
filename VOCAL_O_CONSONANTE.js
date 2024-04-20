//6:Solicitar al usuario un carácter y mostrar si es una vocal o consonante.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: caracter=""

(leer), comparacion (proceso selectivo)

// Los calculos o procesos que se hacen con las

variables

// Proceso: determinar si el carácter ingresado es una vocal o consonante

// La informacion de las variables procesadas

// Salida: resultado de la determinación

// Seupdocodigo:

// Algoritmo determinarVocalConsonante

// declarar

caracter=""

// Escribir "Ingrese un carácter" /

// Leer caracter

// Si caracter es igual a 'a', 'e', 'i', 'o' o 'u' (vocales en minúsculas) entonces

//    Escribir "El carácter ingresado es una vocal."

// Si caracter es igual a 'A', 'E', 'I', 'O' o 'U' (vocales en mayúsculas) entonces

//    Escribir "El carácter ingresado es una vocal."

// De lo contrario

//    Escribir "El carácter ingresado es una consonante."

// FinSi

// FinAlgoritmo

const read = require('prompt-sync')();

const write = console.log

// se crea la función

function determinarVocalConsonante(){

    let caracter=""

    caracter = read("Ingrese un carácter: ")

    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u' || 
        caracter === 'A' || caracter === 'E' || caracter === 'I' || caracter === 'O' || caracter === 'U') {
        write("El carácter ingresado es una vocal.");
    } else {
        write("El carácter ingresado es una consonante.");
    }

}

// se llama o se ejecuta la función

determinarVocalConsonante()
