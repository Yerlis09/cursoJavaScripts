/**
 * Estructura Swithc en Java Script
 */

let num = 3;

let numeroTexto = "valor desconocido";

switch (num) {
    case 1:
        numeroTexto = "Numero 1";
        break;
    case 2:
        numeroTexto = "Numero 2";
        break;
    case 3:
        numeroTexto = "Numero 3";
        break;

    default:
        numeroTexto = "Caso no encontrado";
}

console.log(numeroTexto);