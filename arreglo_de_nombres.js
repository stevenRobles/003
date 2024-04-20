//13:Dado un arreglo de 5 nombres, presentarlos todos.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: arreglo=["", "", "", "", ""]

// Los calculos o procesos que se hacen con las

variables

// Proceso: presentar todos los nombres del arreglo

// La informacion de las variables procesadas

// Salida: nombres

// Seupdocodigo:

// Algoritmo presentarNombres

// declarar

arreglo=["Jose", "Steven", "Max", "Maria", "Ana"]

// Para cada nombre en el arreglo hacer

//    Escribir nombre

// FinPara

// FinAlgoritmo

const arreglo = ["Jose", "Steven", "Max", "Maria", "Ana"]; // Arreglo con los nombres dados

const write = console.log;

// se crea la función

function presentarNombres(){

    arreglo.forEach(nombre => {
        write(nombre);
    });

}

// se llama o se ejecuta la función

presentarNombres();
