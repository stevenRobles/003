//1.Pedir al usuario su nombre y saludarlo

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: nombre=""

(leer), saludo (proceso)

// Los calculos o procesos que se hacen con las

variables

// Proceso: solicitar nombre al usuario y concatenar con un saludo

// La informacion de las variables procesadas

// Salida: saludo

// Seupdocodigo:

// Algoritmo saludar

// declarar

nombre="", saludo=""

// Escribir "Por favor, ingresa tu nombre" /

// Leer nombre

// Concatenar el nombre con un saludo

// Escribir saludo

// FinAlgoritmo

const read = require('prompt-sync')();

const write = console.log

// se crea la funcion

function saludar(){

let nombre="", saludo=""

nombre = read("Por favor, ingresa tu nombre:")

saludo = "¡Hola, " + nombre + "! Bienvenido."

write(saludo)

}

// se llama o se ejecuta la funcion

saludar()


        
