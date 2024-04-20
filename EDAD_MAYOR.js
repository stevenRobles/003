//2:Solicitar al usuario su edad y mostrar si es mayor o menor de edad.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: edad=0

(leer), comparacion (proceso selectivo)

// Los calculos o procesos que se hacen con las

variables

// Proceso: comparar la edad ingresada con 18 y mostrar si es mayor o menor de edad

// La informacion de las variables procesadas

// Salida: resultado de la comparación

// Seupdocodigo:

// Algoritmo compararEdadCon18

// declarar

edad=0

// Escribir "Ingrese su edad" /

// Leer edad

// Si edad es mayor o igual que 18 entonces

//    Escribir "Eres mayor de edad."

// De lo contrario

//    Escribir "Eres menor de edad."

// FinSi

// FinAlgoritmo

const read = require('prompt-sync')();

const write = console.log

// se crea la función

function compararEdadCon18(){

    let edad=0

    edad = parseInt(read("Ingrese su edad:"))

    if (edad >= 18) {
        write("Eres mayor de edad.");
    } else {
        write("Eres menor de edad.");
    }

}

// se llama o se ejecuta la función

compararEdadCon18()
