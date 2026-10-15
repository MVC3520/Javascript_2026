// Nombre y apellido: Miguel Victorio Cabrera
// DNI: 30.741.748

// Ejercicio 8: sumar todos los elementos de una matriz 3x3
const numeros = [
    [2, 65, -55],
    [1000, 0, 88],
    [-13, 89, 67]
];
let suma = 0;

for (let fila = 0; fila < numeros.length; fila++) {
    for (let columna = 0; columna < numeros[fila].length; columna++) {
        suma = suma + numeros[fila][columna];
    }
}

console.log("La suma de todos los elementos es: " + suma);
