// Nombre y apellido: Miguel Victorio Cabrera
// DNI: 30.741.748

// Ejercicio 5: guardar los numeros mayores a 10
const numeros = [5, 12, 8, 20, 3, 15];
const mayores = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        mayores.push(numeros[i]);
    }
}

console.log("Numeros mayores a 10:", mayores);
