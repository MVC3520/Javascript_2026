// Nombre y apellido: Miguel Victorio Cabrera
// DNI: 30.741.748

// Ejercicio 6: recorrer nombres al reves
// El enunciado no da nombres, por eso uso estos de ejemplo
const nombres = ["Ana", "Luis", "Marta", "Pedro"];
const nombresInvertidos = [];

for (let i = nombres.length - 1; i >= 0; i--) {
    nombresInvertidos.push(nombres[i]);
}

console.log("Nombres en orden inverso:", nombresInvertidos);
