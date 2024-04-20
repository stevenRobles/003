//22:Dado un arreglo de 5 elementos presentar la suma de dichos elementos.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: arreglo (con 5 elementos)

// Los calculos o procesos que se hacen con las variables:

// Proceso: 
//    Calcular la suma de los elementos del arreglo

// Salida: el valor de la suma de los elementos

// Seudocódigo:

// Algoritmo calcularSumaElementos

//    Declarar arreglo (con 5 elementos)
//    Escribir "Ingrese 5 elementos para el arreglo: "
//    Leer arreglo

//    suma = 0
//    Para cada elemento en el arreglo:
//        suma = suma + elemento
//    FinPara

//    Escribir "La suma de los elementos es: " + suma

// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function calcularSumaElementos(){
    let arreglo = [];

    write("Ingrese 5 elementos para el arreglo: ");
    for (let i = 0; i < 5; i++) {
        arreglo[i] = parseFloat(read(`Elemento ${i+1}: `));
    }

    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }

    write("La suma de los elementos es: " + suma);
}

calcularSumaElementos();
