//7:Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: nombre1="", nombre2=""

(leer), comparacion (proceso selectivo)

// Los calculos o procesos que se hacen con las

variables

// Proceso: determinar si los nombres ingresados son iguales, o si uno es mayor o menor que el otro

// La informacion de las variables procesadas

// Salida: resultado de la comparación

// Seupdocodigo:

// Algoritmo compararNombres

// declarar

nombre1="", nombre2=""

// Escribir "Ingrese el primer nombre" /

// Leer nombre1

// Escribir "Ingrese el segundo nombre" /

// Leer nombre2

// Si nombre1 es igual a nombre2 entonces

//    Escribir "Los nombres son iguales."

// Si nombre1 es mayor que nombre2 entonces

//    Escribir "El primer nombre es mayor que el segundo."

// De lo contrario

//    Escribir "El primer nombre es menor que el segundo."

// FinSi

// FinAlgoritmo

const read = require('prompt-sync')();

const write = console.log

// se crea la función

function compararNombres(){

    let nombre1="", nombre2=""

    nombre1 = read("Ingrese el primer nombre: ")

    nombre2 = read("Ingrese el segundo nombre: ")

    if (nombre1 === nombre2) {
        write("Los nombres son iguales.");
    } else if (nombre1 > nombre2) {
        write("El primer nombre es mayor que el segundo.");
    } else {
        write("El primer nombre es menor que el segundo.");
    }

}

// se llama o se ejecuta la función

compararNombres()
