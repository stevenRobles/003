//20:Dado un arreglo de 5 elementos indicar si el primer elemento es par y el último elemento es impar.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: arreglo (con 5 elementos)

(comparación)

// Los calculos o procesos que se hacen con las variables:

// Proceso: 
//    Obtener el primer elemento del arreglo y el último elemento del arreglo
//    Verificar si el primer elemento es par y si el último elemento es impar

// Salida: resultado de la comparación (verdadero o falso)

// Seudocódigo:

// Algoritmo verificarParImparArreglo

//    Declarar arreglo (con 5 elementos)
//    Escribir "Ingrese 5 elementos para el arreglo: "
//    Leer arreglo

//    primerElemento = arreglo[0]
//    ultimoElemento = arreglo[4]

//    Si primerElemento es par y ultimoElemento es impar entonces
//        Escribir "El primer elemento es par y el último elemento es impar"
//    Sino
//        Escribir "El primer elemento NO es par o el último elemento NO es impar"
//    FinSi

// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function verificarParImparArreglo(){
    let arreglo = [];
    let primerElemento, ultimoElemento;

    write("Ingrese 5 elementos para el arreglo: ");
    for (let i = 0; i < 5; i++) {
        arreglo[i] = parseInt(read(`Elemento ${i+1}: `));
    }

    primerElemento = arreglo[0];
    ultimoElemento = arreglo[4];

    if (primerElemento % 2 === 0 && ultimoElemento % 2 !== 0) {
        write("El primer elemento es par y el último elemento es impar");
    } else {
        write("El primer elemento NO es par o el último elemento NO es impar");
    }
}

verificarParImparArreglo();
