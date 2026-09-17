// EJERCICIO 1: CALCULADORA DE COMPRAS

let precioProducto1 = 1500;
let precioProducto2 = 2300;
let precioProducto3 = 1200;

let dineroDisponible = 7000;

let totalPagar = precioProducto1 + precioProducto2 + precioProducto3;

let vuelto = dineroDisponible - totalPagar;

console.log("Precio producto 1: $" + precioProducto1);
console.log("Precio producto 2: $" + precioProducto2);
console.log("Precio producto 3: $" + precioProducto3);
console.log("Total a pagar: $" + totalPagar);
console.log("Dinero disponible: $" + dineroDisponible);
console.log("Vuelto: $" + vuelto);