// 15- Realiza un script que cuente el número de vocales que tiene un texto.

let frase = prompt("Por favor, ingrese una frase pequeña.").toLocaleLowerCase();
let contador = 0;

for(let i=0;i<frase.length;i++) {
    if(frase.charAt(i) === "a" || frase.charAt(i) === "e" || frase.charAt(i) === "i" || frase.charAt(i) === "o" || frase.charAt(i) === "u" ) {
        contador++;
    };
}
document.write(`<p>El número de vocales que tiene la frase ingresada es: ${contador}</p>`);