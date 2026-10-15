// Nombre y apellido: Miguel Victorio Cabrera
// DNI: 30.741.748

// Ejercicio 9: encontrar la posicion del barco
const oceano = [
    ["~", "~", "~"],
    ["~", "B", "~"],
    ["~", "~", "~"]
];

for (let fila = 0; fila < oceano.length; fila++) {
    for (let columna = 0; columna < oceano[fila].length; columna++) {
        if (oceano[fila][columna] === "B") {
            console.log("El barco esta en la fila " + fila + " y columna " + columna + ".");
        }
    }
}

// Otra version es usar IndexOf
const oceanoV = [
    ["~", "~", "~"],
    ["~", "B", "~"],
    ["~", "~", "~"]
];

for (let i = 0; i < oceanoV.length; i++) {
    let columna = oceanoV[i].indexOf("B");

    if (columna !== -1)
        console.log("El barco esta en la fila: " + i + " y Columna: " + columna);
}