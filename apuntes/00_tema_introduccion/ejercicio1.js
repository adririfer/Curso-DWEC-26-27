/*//Ejercicio 1 de JavaScript
//

console.log("Hola mundo");
//tipos de datos en JavaScript
//
// String y Number
// ' '  " " ` comillas francesas `
// var let const
let nombre = "Adrián"
let apellidos = "RF"
let aniosTrabajo = 25
console.log(`Hola a tod@s me llamo ${nombre}, ${apellidos} y llevo trabajando ${aniosTrabajo} años`);
console.log(typeoff(String(aniosTrabajo)));
console.log(typeoff(Number(apellidos)))

// validaciones basicas == ===

// == <-- significa si al valor de la izquierda es igual que el valor de la derecha
// === <-- significa si el valor y el tipo de la izquierda coinciden con el valor y tipo de la derecha
//
//'5' === 5 false 
//'5' == 5 true 

// ternarias evaluación_expresión ? verdadero  : false
//


const edad = "21"
edad > 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de verdadero")
*/ 

//Dada la edad, los minutos y los segundos. Comprobar primero si la edad es un numero positivo y mayor que 18 y segundo comprobar si la hora y los minutos son valores validos dentro de mi sistema de numeracion.
let edad = 21
let minutos = 35
let segundos = 54
edad > 18 ? console.log("Es mayor que 18 y un numero positivo") : console.log("No es mayor que 18 o no es positivo")
typeoff(minutos) == typeoff(Number) && typeoff(segundos) == typeoff(Number) ? console.log("Son valores validos" ) : console.log("No son valores validos")
