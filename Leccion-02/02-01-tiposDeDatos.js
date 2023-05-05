/* Ejemplos de tipos de datos en JavaScripst*/

//Tipo de dato String
let nombre = "Yerlys";
console.log(nombre);

//Tipo de dato numerico
let numero = 1000;
console.log(numero);

//Tipo de dato objet

let objet = {
    nombre : "Yerlys",
    apellido : "Castellar",
    edad : 24,
    estatura : 1.70
}

console.log(objet)

//Tipo de dato Booleano 

let bandera = true;
console.log(bandera)

//Tipo de dato function
function miFuncion(){}
console.log(miFuncion)

//Tipo de dato Symbol
let simbolo = Symbol("mi simbolo");
console.log(simbolo)

//tipo clase es una funcion
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

//tipo de dato undefined(tambien se puede usar como un valor)
console.log(Persona)

let x;
console.log(x)

//Tipo de dato null(object) = ausencia de valor

let y = null;
console.log(y)