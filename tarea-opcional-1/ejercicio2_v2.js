const prompt = require("prompt-sync")()

console.log("===== FICHA PERSONAL =====")

let nombre = prompt("Nombre: ")
let apellido = prompt("Apellido: ")
let edad = Number(prompt("Edad: "))
let horasProgramacion = Number(
    prompt("Horas que programas por semana: ")
)

let respuestaProgramar = prompt(
    "Te gusta programar? (SI/NO): "
)

let leGustaProgramar = respuestaProgramar == "SI"

let esMayorDeEdad = edad >= 18

// Consideramos dedicación alta si programa 10 horas o más
let dedicacionAlta = horasProgramacion >= 10

// Combina tres condiciones
let perfilProgramador =
    esMayorDeEdad &&
    leGustaProgramar &&
    dedicacionAlta

console.log("")
console.log("===== RESULTADO =====")

console.log("Nombre completo: ", nombre, apellido)
console.log("Edad: ", edad)
console.log("Horas de programación semanales: ", horasProgramacion)

console.log("Le gusta programar?: ", leGustaProgramar)
console.log("Es mayor de edad?: ", esMayorDeEdad)
console.log("Tiene dedicación alta?: ", dedicacionAlta)
console.log("Cumple el perfil programador?: ", perfilProgramador)

console.log("")
console.log("===== TIPOS DE DATOS =====")

console.log("Tipo de nombre: ", typeof nombre)
console.log("Tipo de edad: ", typeof edad)
console.log("Tipo de horas: ", typeof horasProgramacion)
console.log("Tipo de leGustaProgramar: ", typeof leGustaProgramar)
console.log("Tipo de esMayorDeEdad: ", typeof esMayorDeEdad)