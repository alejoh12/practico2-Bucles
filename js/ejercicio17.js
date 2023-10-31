/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
Ejemplo:
Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1
*/

let frase = prompt("Por favor, ingrese una frase pequeña.").toLocaleLowerCase();

for(let i=0;i<frase.length;i++) {
    if(frase.charAt(i) === "a" || frase.charAt(i) === "e" || frase.charAt(i) === "i" || frase.charAt(i) === "o" || frase.charAt(i) === "u") {
        document.write(`<p>La vocal '${frase.charAt(i)}' está en la posición: ${i}</p>`);
        break;
    }
}