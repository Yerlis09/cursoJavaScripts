/**
 * Convertir tipo de dato String a Tipo de dato Number en JavaScript
 */

let miNumero = "100";
console.log(typeof miNumero);

let edad = Number(miNumero);
console.log(typeof edad);

if (edad > 18) {
    console.log("Ya puede votar");
} else {
    console.log("No puede votar");
}

let puedeVotar = edad >= 18 ? "Ya puede votar" : "No puede votar";
console.log(puedeVotar);