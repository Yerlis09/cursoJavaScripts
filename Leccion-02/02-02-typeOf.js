/*TypeOf en JavaScripst*/ 

let nombre = "María";
console.log(typeof nombre)

nombre = 2;
console.log(typeof nombre)

nombre = {
    nombre : "María",
    numero :  2
}

console.log(typeof nombre)

nombre = false;
console.log(typeof nombre)

function miFuncion(){}
console.log(typeof miFuncion)

let simbolo = Symbol("mi simbolo");
console.log(typeof simbolo)

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona)

let x;
console.log(typeof x)

let y = null;
console.log(typeof y)