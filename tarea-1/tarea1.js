// TAREA 1 - JavaScript
// Nombre y apellido: Miguel Victorio Cabrera
// DNI: 30.741.748


// Ejercicio 1: Clasificación de Número Entero

let numero = Number(prompt("Ingrese un número entero:"));

if (numero > 0) {
    console.log("El número es positivo");
} else if (numero < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}


// Ejercicio 2: Determinar Tipo de Triángulo

let lado1 = Number(prompt("Ingrese el primer lado del triángulo:"));
let lado2 = Number(prompt("Ingrese el segundo lado del triángulo:"));
let lado3 = Number(prompt("Ingrese el tercer lado del triángulo:"));

if (lado1 === lado2 && lado2 === lado3) {
    console.log("El triángulo es equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("El triángulo es isósceles");
} else {
    console.log("El triángulo es escaleno");
}


// Ejercicio 3: Clasificación de Edad

let edad = Number(prompt("Ingrese su edad:"));

if (edad < 12) {
    console.log("Niño");
} else if (edad <= 17) {
    console.log("Adolescente");
} else if (edad <= 64) {
    console.log("Adulto");
} else {
    console.log("Adulto mayor");
}


// Ejercicio 4: Determinar si un Número es Par o Impar

let numero2 = Number(prompt("Ingrese un número:"));

if (numero2 % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}


// Ejercicio 5: Cálculo de Notas

let nota = Number(prompt("Ingrese su calificación entre 0 y 100:"));

if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else if (nota >= 60) {
    console.log("D");
} else {
    console.log("F");
}


// Ejercicio 6: Número Mayor

let num1 = Number(prompt("Ingrese el primer número:"));
let num2 = Number(prompt("Ingrese el segundo número:"));

if (num1 > num2) {
    console.log("El número mayor es: " + num1);
} else if (num2 > num1) {
    console.log("El número mayor es: " + num2);
} else {
    console.log("Los dos números son iguales");
}


// Ejercicio 6 opcional: Mayor de tres números

let n1 = Number(prompt("Ingrese el primer número:"));
let n2 = Number(prompt("Ingrese el segundo número:"));
let n3 = Number(prompt("Ingrese el tercer número:"));

let mayor = n1;

if (n2 > mayor) {
    mayor = n2;
}

if (n3 > mayor) {
    mayor = n3;
}

console.log("El número mayor es: " + mayor);