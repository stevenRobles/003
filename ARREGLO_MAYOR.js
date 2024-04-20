//19:Dado un arreglo de 5 elementos indicar si el primer elemento es mayor que el último elemento.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: arreglo (con 5 elementos)

(comparación)

// Los calculos o procesos que se hacen con las variables:

// Proceso: 
//    Obtener el primer elemento del arreglo y el último elemento del arreglo
//    Comparar si el primer elemento es mayor que el último elemento

// Salida: resultado de la comparación (verdadero o falso)

// Seudocódigo:

// Algoritmo compararElementosArreglo

//    Declarar arreglo (con 5 elementos)
//    Escribir "Ingrese 5 elementos para el arreglo: "
//    Leer arreglo

//    primerElemento = arreglo[0]
//    ultimoElemento = arreglo[4]

//    Si primerElemento es mayor que ultimoElemento entonces
//        Escribir "El primer elemento es mayor que el último elemento"
//    Sino
//        Escribir "El primer elemento NO es mayor que el último elemento"
//    FinSi

// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function compararElementosArreglo(){
    let arreglo = [];
    let primerElemento, ultimoElemento;

    write("Ingrese 5 elementos para el arreglo: ");
    for (let i = 0; i < 5; i++) {
        arreglo[i] = parseFloat(read(`Elemento ${i+1}: `));
    }

    primerElemento = arreglo[0];
    ultimoElemento = arreglo[4];

    if (primerElemento > ultimoElemento) {
        write("El primer elemento es mayor que el último elemento");
    } else {
        write("El primer elemento NO es mayor que el último elemento");
    }
}

compararElementosArreglo();
