// Nombre y apellido: Miguel Victorio Cabrera
// DNI: 30.741.748

// Ejercicio 7: calcular el total y el promedio de precios
// El enunciado no indica precios, asi que uso estos de ejemplo
const precios = [1200, 2500, 800, 1500];
let total = 0;

for (const precio of precios) {
    total = total + precio;
}

const promedio = total / precios.length;
console.log("Gasto total: $" + total);
console.log("Precio promedio: $" + promedio);
