//9:Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: numero=0

(leer), tabla_de_multiplicar (proceso)

// Los calculos o procesos que se hacen con las

variables

// Proceso: calcular la tabla de multiplicar del número ingresado del 1 al 10

// La informacion de las variables procesadas

// Salida: tabla_de_multiplicar

// Seupdocodigo:

// Algoritmo mostrarTablaDeMultiplicar

// declarar

numero=0, tabla_de_multiplicar=""

// Escribir "Ingrese un número" /

// Leer numero

// Calcular la tabla de multiplicar del número ingresado del 1 al 10

// Escribir "Tabla de multiplicar del " + numero + ":\n"

// Para i desde 1 hasta 10 hacer

//    tabla_de_multiplicar = tabla_de_multiplicar + numero + " x " + i + " = " + (numero * i) + "\n"

// FinPara

// Escribir tabla_de_multiplicar

// FinAlgoritmo

const read = require('prompt-sync')();

const write = console.log

// se crea la función

function mostrarTablaDeMultiplicar(){

    let numero=0, tabla_de_multiplicar=""

    numero = parseInt(read("Ingrese un número:"))

    write("Tabla de multiplicar del " + numero + ":")

    for (let i = 1; i <= 10; i++) {
        tabla_de_multiplicar += `${numero} x ${i} = ${numero * i}\n`;
    }

    write(tabla_de_multiplicar)
}

// se llama o se ejecuta la función

mostrarTablaDeMultiplicar()
