// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let filas = parseInt(prompt("Por favor, ingrese el número de filas de la tabla."));
let columnas = parseInt(prompt("Por favor, ingrese el número de columnas de la tabla."));
let celdas = filas*columnas;

document.write(`<table><tbody>`);
for(let i=0;i<filas;i++) {
    document.write(`<tr>`);
    for(let j=0;j<columnas;j++) {
        document.write(`<td>${celdas}</td>`);
        celdas--;
    }
    document.write(`<tr>`);
}
document.write(`</tbody></table>`);

