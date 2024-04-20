//4:Solicitar al usuario un número y mostrar si es positivo o negativo.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: numero (número ingresado por el usuario)

(comparación)

// Los calculos o procesos que se hacen con las variables:

// Proceso: 
//    Verificar si el número es positivo, negativo o cero

// Salida: el resultado de la verificación (positivo, negativo o cero)

// Seudocódigo:

// Algoritmo verificarPositivoNegativo

//    Declarar numero

//    Escribir "Ingrese un número: "
//    Leer numero

//    Si numero es mayor que 0 entonces
//        Escribir "El número es positivo"
//    Sino si numero es menor que 0 entonces
//        Escribir "El número es negativo"
//    Sino
//        Escribir "El número es cero"
//    FinSi

// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function verificarPositivoNegativo(){
    let numero = parseFloat(read("Ingrese un número: "));

    if (numero > 0) {
        write("El número es positivo");
    } else if (numero < 0) {
        write("El número es negativo");
    } else {
        write("El número es cero");
    }
}

verificarPositivoNegativo();
