// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let total = 0;

do {
    const numero = parseInt(prompt("Ingrese un número por favor."));

    if(isNaN(numero)){
        alert("El valor ingresado no es un número válido.");
    }else {        
        total += numero;
    }
}while(confirm("¿Desea ingresar otro número?"));

document.write(`<p>La suma totoal de los números ingresados es: ${total}</p>`);