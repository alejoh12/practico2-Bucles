/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp*/

let cadena = "";

do {
    const frase = prompt("Ingrese una frase, por favor.");
    if(cadena === "") {
        cadena += frase;
    }else {        
        cadena += " - "+frase;
    }
}while(confirm("¿Desea ingresar otra cadena?"));

document.write(`<p>Las cadenas concatenadas son: </br>${cadena}</p>`);