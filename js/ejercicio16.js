// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let frase = prompt("Por favor, ingrese una frase pequeña.");
let fraseInvertida = "";

for(let i=frase.length;i>0;i--) {
    fraseInvertida += frase.charAt(i-1);
}

document.write(`<p>La frase ingresada invertida queda así: '${fraseInvertida}'</p>`);