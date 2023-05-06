/**
 * Operadores logicos en JavaScript
 */

let a = 15;
let valMin = 0, valMax = 10;

//AND
if (a >= valMin && a <= valMax) {
    console.log("Dentro del rango");
} else {
    console.log("Fuera del rango")
}

//OR

let vacaciones = false;
let diaDescanso = true;

if (vacaciones || diaDescanso) {
    console.log("Puedo ir a ver el partido");
} else {
    console.log("No puedo ir a ver el partido");
}