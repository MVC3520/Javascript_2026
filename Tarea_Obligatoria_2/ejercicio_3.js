// Nombre y apellido: Miguel Victorio Cabrera
// DNI: 30.741.748

// Ejercicio 3: buscar un numero en el arreglo
const numeros = [10, 20, 30, 40, 50];
// Cambio este numero para hacer otras pruebas
const numeroBuscado = 30;
let encontrado = false;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroBuscado) {
        encontrado = true;
    }
}

if (encontrado) {
    console.log("El numero " + numeroBuscado + " esta en el arreglo.");
} else {
    console.log("El numero " + numeroBuscado + " no esta en el arreglo.");
}
