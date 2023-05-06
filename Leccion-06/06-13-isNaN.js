/**
 * Función isNaN en JavaScript
 */

let miNumero = "18x";
console.log(typeof miNumero);

let edad = Number(miNumero);
console.log(edad);

if (isNaN(edad)) {
    console.log("No es un número")
} else {

    if (edad > 18) {
        console.log("Ya puede votar");
    } else {
        console.log("No puede votar");
    }

    let puedeVotar = edad >= 18 ? "Ya puede votar" : "No puede votar";
    console.log(puedeVotar);
}