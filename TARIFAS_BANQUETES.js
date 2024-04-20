//18:“Somos más” es una empresa dedicada a ofrecer banquetes; sus tarifas son las siguientes:
El costo de platillo por persona es de $20.00, pero si el número de personas es mayor a 100 pero menor o igual a 200, el costo es de $15.00. Para más de 200 personas el costo por platillo es de $10.00.
Se requiere un algoritmo que ayude a determinar el presupuesto que se debe presentar a los clientes que deseen realizar un evento, considerando que al total hay que agregarle el 15% del iva.

// Analisis de requerimentos:

// los datos o variables del problema

// Entrada: 
//    numeroPersonas, 
//    costoPlatilloPorPersona, 
//    iva (15% del total)

(leer), calculo (proceso), comparacion (proceso selectivo)

// Los calculos o procesos que se hacen con las variables:

// Proceso: 
//    Si numeroPersonas es menor o igual a 100 entonces
//        costoTotal = numeroPersonas * 20
//    Sino si numeroPersonas es mayor a 100 y menor o igual a 200 entonces
//        costoTotal = numeroPersonas * 15
//    Sino
//        costoTotal = numeroPersonas * 10

//    ivaTotal = costoTotal * 0.15
//    presupuestoTotal = costoTotal + ivaTotal

// Salida: presupuestoTotal

// Seudocódigo:

// Algoritmo calcularPresupuestoEvento

//    Declarar numeroPersonas, costoPlatilloPorPersona, costoTotal, iva, ivaTotal, presupuestoTotal

//    Escribir "Ingrese el número de personas:"
//    Leer numeroPersonas

//    Si numeroPersonas es menor o igual a 100 entonces
//        costoTotal = numeroPersonas * 20
//    Sino si numeroPersonas es mayor a 100 y menor o igual a 200 entonces
//        costoTotal = numeroPersonas * 15
//    Sino
//        costoTotal = numeroPersonas * 10

//    ivaTotal = costoTotal * 0.15
//    presupuestoTotal = costoTotal + ivaTotal

//    Escribir "El presupuesto total es: $" + presupuestoTotal

// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function calcularPresupuestoEvento(){
    let numeroPersonas, costoPlatilloPorPersona, costoTotal, iva, ivaTotal, presupuestoTotal;

    numeroPersonas = parseInt(read("Ingrese el número de personas: "));

    if (numeroPersonas <= 100) {
        costoPlatilloPorPersona = 20;
    } else if (numeroPersonas <= 200) {
        costoPlatilloPorPersona = 15;
    } else {
        costoPlatilloPorPersona = 10;
    }

    costoTotal = numeroPersonas * costoPlatilloPorPersona;
    ivaTotal = costoTotal * 0.15;
    presupuestoTotal = costoTotal + ivaTotal;

    write("El presupuesto total es: $" + presupuestoTotal);
}

calcularPresupuestoEvento();
