//11:Solicitar al usuario una distancia en metros y mostrarla en centímetros.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: metros=0

(leer), conversion (proceso)

// Los calculos o procesos que se hacen con las

variables

// Proceso: convertir metros a centímetros

// La informacion de las variables procesadas

// Salida: centimetros

// Seupdocodigo:

// Algoritmo convertirMetrosACentimetros

// declarar

metros=0, centimetros=0

// Escribir "Ingrese la distancia en metros" /

// Leer metros

// Convertir metros a centímetros

centimetros = metros * 100

// Escribir "La distancia en centímetros es: " + centimetros

// FinAlgoritmo

const read = require('prompt-sync')();

const write = console.log

// se crea la función

function convertirMetrosACentimetros(){

    let metros=0, centimetros=0

    metros = parseFloat(read("Ingrese la distancia en metros:"))

    centimetros = metros * 100

    write("La distancia en centímetros es: " + centimetros)

}

// se llama o se ejecuta la función

convertirMetrosACentimetros()
