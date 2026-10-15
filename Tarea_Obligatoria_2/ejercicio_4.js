// Nombre y apellido: Miguel Victorio Cabrera
// DNI: 30.741.748
// Ejercicio 4: contar cuantas veces aparece el numero 2
const numeros = [1, 2, 3, 2, 4, 2, 5];
let contador = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 2) {
        contador++;
    }
}

console.log("El numero 2 aparece " + contador + " veces.");
