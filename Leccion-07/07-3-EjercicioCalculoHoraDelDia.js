/**
 * Ejercicio calculo de hora del dia
 */

let horaDelDia = 24;
let saludo;

if (horaDelDia >= 6 && horaDelDia <= 11) {
    saludo = "Buenos dias";
} else if (horaDelDia >= 12 && horaDelDia <= 18) {
    saludo = "Buenas tardes";
} else if (horaDelDia >= 19 && horaDelDia <= 24) {
    saludo = "Buenas noches";
} else {
    saludo = "Hora del dia no coincide";
}

console.log(saludo);