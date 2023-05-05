/* Concatenacion de cadenas en JavaScripts*/

let nombre = 'Yerlys';
let apellido = 'Castellar';
let nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

nombreCompleto = 'Yerlys' + ' ' + 'Castellar' + ' ' + 'Julio';
console.log(nombreCompleto);

//siempre leera de derecha a izquierda
let x = nombre + 205
console.log(x);

// prioriza lo que esta entre parentesis
x = nombre + (5 + 5);
console.log(x);

x = 2 + 7 + nombre;
console.log(x)