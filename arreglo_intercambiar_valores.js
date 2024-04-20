//15:Dado un arreglo de 5 elementos, cambiar los valores el primer y último elemento entre sí.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: arreglo=[0,0,0,0,0]

(arreglo dado)

// Los calculos o procesos que se hacen con las

variables

// Proceso: intercambiar los valores del primer y último elemento del arreglo

// La informacion de las variables procesadas

// Salida: arreglo modificado

// Seupdocodigo:

// Algoritmo intercambiarElementos

// declarar

arreglo=[60,70,80,90,100]

// Escribir "Arreglo original: " + arreglo

// Intercambiar los valores del primer y último elemento

//    temp = arreglo[0]

//    arreglo[0] = arreglo[longitud del arreglo - 1]

//    arreglo[longitud del arreglo - 1] = temp

// Escribir "Arreglo modificado: " + arreglo

// FinAlgoritmo

const arreglo = [60, 70, 80, 90, 100]; // Arreglo con los valores dados

const write = console.log;

// se crea la función

function intercambiarElementos(){

    const longitud = arreglo.length;

    write("Arreglo original: " + arreglo);

    // Intercambiar los valores del primer y último elemento
    const temp = arreglo[0];
    arreglo[0] = arreglo[longitud - 1];
    arreglo[longitud - 1] = temp;

    write("Arreglo modificado: " + arreglo);
}

// se llama o se ejecuta la función

intercambiarElementos();
