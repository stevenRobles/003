//21:Dado un arreglo de 3 elementos indicar cuál de los elementos es el mayor.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: arreglo (con 3 elementos)

(comparación)

// Los calculos o procesos que se hacen con las variables:

// Proceso: 
//    Obtener el máximo de los tres elementos del arreglo

// Salida: el valor del elemento máximo

// Seudocódigo:

// Algoritmo encontrarMayorElemento

//    Declarar arreglo (con 3 elementos)
//    Escribir "Ingrese 3 elementos para el arreglo: "
//    Leer arreglo

//    mayorElemento = arreglo[0]
//    Para cada elemento en el arreglo, comenzando desde el segundo elemento:
//        Si elemento > mayorElemento entonces
//            mayorElemento = elemento
//        FinSi
//    FinPara

//    Escribir "El mayor elemento es: " + mayorElemento

// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function encontrarMayorElemento(){
    let arreglo = [];

    write("Ingrese 3 elementos para el arreglo: ");
    for (let i = 0; i < 3; i++) {
        arreglo[i] = parseFloat(read(`Elemento ${i+1}: `));
    }

    let mayorElemento = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayorElemento) {
            mayorElemento = arreglo[i];
        }
    }

    write("El mayor elemento es: " + mayorElemento);
}

encontrarMayorElemento();
