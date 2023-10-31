/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

let numero = parseInt(prompt("Ingrese el valor que será el tamaño de la pirámide, no mayor a 50 por favor."));

if(!isNaN(numero)){
    if(numero > 0 && numero <=50){
        for(let i=0;i<numero;i++) {
            for(let j=0;j<i+1;j++) {
                document.write(`<span>${j+1}</span>`);
            }
            document.write("</br>");
        }
    }else {
        alert("El número ingresado no está entre los valores indicados. Por favor ingrese un valor menor a 50 y mayor a 0.");
    }
}else {
    alert("El número ingresado no es un número válido. Por favor ingrese un valor numérico válido.");
}