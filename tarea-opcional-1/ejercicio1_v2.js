const prompt = require("prompt-sync")()

console.log("===== CALCULADORA DE COMPRAS =====")

let producto1 = prompt("Nombre del producto 1: ")
let precio1 = Number(prompt("Precio del producto 1: $"))
let cantidad1 = Number(prompt("Cantidad: "))

let producto2 = prompt("Nombre del producto 2: ")
let precio2 = Number(prompt("Precio del producto 2: $"))
let cantidad2 = Number(prompt("Cantidad: "))

let producto3 = prompt("Nombre del producto 3: ")
let precio3 = Number(prompt("Precio del producto 3: $"))
let cantidad3 = Number(prompt("Cantidad: "))

let dineroDisponible = Number(prompt("Dinero disponible: $"))

let subtotal1 = precio1 * cantidad1
let subtotal2 = precio2 * cantidad2
let subtotal3 = precio3 * cantidad3

let total = subtotal1 + subtotal2 + subtotal3

// Descuento del 10% si la compra supera los $50000
let tieneDescuento = total > 50000
let descuento = total * 0.10 * Number(tieneDescuento)

let totalPagar = total - descuento

let alcanzaDinero = dineroDisponible >= totalPagar
let vuelto = dineroDisponible - totalPagar

console.log("")
console.log("===== RESUMEN DE LA COMPRA =====")
console.log(producto1, "- Subtotal: $", subtotal1)
console.log(producto2, "- Subtotal: $", subtotal2)
console.log(producto3, "- Subtotal: $", subtotal3)

console.log("Subtotal general: $", total)
console.log("Tiene descuento?: ", tieneDescuento)
console.log("Descuento: $", descuento)
console.log("TOTAL A PAGAR: $", totalPagar)

console.log("")
console.log("Dinero disponible: $", dineroDisponible)
console.log("Alcanza el dinero?: ", alcanzaDinero)
console.log("Saldo/Vuelto: $", vuelto)