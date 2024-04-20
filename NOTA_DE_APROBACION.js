//14:Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando que la nota mínima de aprobación es 60 puntos.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: notaExamen=0

(leer), comparacion (proceso selectivo)

// Los calculos o procesos que se hacen con las

variables

// Proceso: determinar si la nota ingresada es mayor o igual a 60

// La informacion de las variables procesadas

// Salida: resultado de la determinación (aprobado o reprobado)

// Seupdocodigo:

// Algoritmo determinarAprobacion

// declarar

notaExamen=0

// Escribir "Ingrese su nota en el examen" /

// Leer notaExamen

// Si notaExamen es mayor o igual que 60 entonces

//    Escribir "Felicidades, has aprobado el examen."

// De lo contrario

//    Escribir "Lo siento, has reprobado el examen."

// FinSi

// FinAlgoritmo

const read = require('prompt-sync')();

const write = console.log

// se crea la función

function determinarAprobacion(){

    let notaExamen=0

    notaExamen = parseFloat(read("Ingrese su nota en el examen: "))

    if (notaExamen >= 60) {
        write("Felicidades, has aprobado el examen.");
    } else {
        write("Lo siento, has reprobado el examen.");
    }

}

// se llama o se ejecuta la función

determinarAprobacion()
