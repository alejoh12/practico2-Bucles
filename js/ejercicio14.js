// 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

let frase = prompt("Ingrese una frase corta, por favor.");
let fraseMostrada = "";

for(let i=0;i<frase.length;i++) {
    if(fraseMostrada === "") {
        fraseMostrada += frase.charAt(i);
    }else {
        fraseMostrada += "-"+ frase.charAt(i);
    }
}

document.write(`<h3>${fraseMostrada}</h3>`);