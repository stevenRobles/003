//16.

Pedir al usuario su sueldo mensual y determinar su sueldo anual. Si el sueldo anual supera los $30,000, aplicar un impuesto del 15% sobre el excedente y mostrar el sueldo neto anual.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: sueldoMensual=0.0 (leer), sueldoAnual=0.0 (calcular), impuesto=0.0 (calcular), sueldoNetoAnual=0.0 (calcular)

(leer), calculo (proceso), comparacion (proceso selectivo)

// Los calculos o procesos que se hacen con las variables:

// Proceso: 
//    Calcular sueldoAnual = sueldoMensual * 12
//    Si sueldoAnual > $30,000
//        Calcular impuesto = (sueldoAnual - $30,000) * 0.15
//        Calcular sueldoNetoAnual = sueldoAnual - impuesto
//    Sino
//        sueldoNetoAnual = sueldoAnual

// Salida: sueldoNetoAnual

// Seudocódigo:

// Algoritmo calcularSueldoNetoAnual

//    Declarar sueldoMensual=0.0, sueldoAnual=0.0, impuesto=0.0, sueldoNetoAnual=0.0

//    Escribir "Ingrese sueldo mensual:"
//    Leer sueldoMensual

//    sueldoAnual = sueldoMensual * 12

//    Si sueldoAnual > $30,000
//        Entonces
//            impuesto = (sueldoAnual - $30,000) * 0.15
//            sueldoNetoAnual = sueldoAnual - impuesto
//        Sino
//            sueldoNetoAnual = sueldoAnual
//    FinSi

//    Escribir "Sueldo neto anual: " + sueldoNetoAnual

// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function calcularSueldoNetoAnual(){
    let sueldoMensual = 0.0;
    let sueldoAnual = 0.0;
    let impuesto = 0.0;
    let sueldoNetoAnual = 0.0;

    sueldoMensual = parseFloat(read("Ingrese sueldo mensual: "));

    sueldoAnual = sueldoMensual * 12;

    if (sueldoAnual > 30000) {
        impuesto = (sueldoAnual - 30000) * 0.15;
        sueldoNetoAnual = sueldoAnual - impuesto;
    } else {
        sueldoNetoAnual = sueldoAnual;
    }

    write("Sueldo neto anual: " + sueldoNetoAnual);
}

calcularSueldoNetoAnual();
