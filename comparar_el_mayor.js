//10:Pedir al usuario dos números y mostrar el mayor.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: numero1=0, numero2=0

(leer), comparacion (proceso)

// Los calculos o procesos que se hacen con las

variables

// Proceso: comparar numero1 y numero2 para determinar el mayor

// La informacion de las variables procesadas

// Salida: mayor

// Seupdocodigo:

// Algoritmo encontrarMayor

// declarar

numero1=0, numero2=0, mayor=0

// Escribir "Ingrese el primer número" /

// Leer numero1

// Escribir "Ingrese el segundo número" /

// Leer numero2

// Si numero1 es mayor que numero2 entonces

//    mayor = numero1

// De lo contrario

//    mayor = numero2

// FinSi

// Escribir "El número mayor es: " + mayor

// FinAlgoritmo

const read = require('prompt-sync')();

const write = console.log

// se crea la función

function encontrarMayor(){

    let numero1=0, numero2=0, mayor=0

    numero1 = parseFloat(read("Ingrese el primer número:"))

    numero2 = parseFloat(read("Ingrese el segundo número:"))

    if (numero1 > numero2) {
        mayor = numero1;
    } else {
        mayor = numero2;
    }

    write("El número mayor es: " + mayor)

}

// se llama o se ejecuta la función

encontrarMayor()
