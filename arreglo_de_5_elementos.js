//14:Dado un arreglo de 5 elementos, presentar el primero, el del medio y el último.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: arreglo=[0,0,0,0,0]

(arreglo dado)

// Los calculos o procesos que se hacen con las

variables

// Proceso: presentar el primer elemento, el del medio y el último del arreglo

// La informacion de las variables procesadas

// Salida: elementos del arreglo

// Seupdocodigo:

// Algoritmo presentarElementos

// declarar

arreglo=[10,20,30,40,50]

// Escribir "El primer elemento es: " + arreglo[0]

// Calcular el indice del elemento del medio

//    medio = longitud del arreglo dividido por 2 (asumiendo que la longitud del arreglo es siempre 5)

// Escribir "El elemento del medio es: " + arreglo[medio]

// Escribir "El último elemento es: " + arreglo[longitud del arreglo - 1]

// FinAlgoritmo

const arreglo = [10, 20, 30, 40, 50]; // Arreglo con los valores dados

const write = console.log;

// se crea la función

function presentarElementos(){

    const longitud = arreglo.length;

    const medio = Math.floor(longitud / 2); // Índice del elemento del medio

    write("El primer elemento es: " + arreglo[0]);

    write("El elemento del medio es: " + arreglo[medio]);

    write("El último elemento es: " + arreglo[longitud - 1]);

}

// se llama o se ejecuta la función

presentarElementos();
