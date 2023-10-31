/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

let numero = parseInt(prompt("Ingrese el valor que será el tamaño de la pirámide, no mayor a 50 por favor."));

if(!isNaN(numero)){
    if(numero > 0 && numero <=50){
        for(let i=numero;i>0;i--) {
            for(let j=0;j<i;j++) {
                document.write(`<span>${i}</span>`);
            }
            document.write("</br>");
        }
    }else {
        alert("El número ingresado no está entre los valores indicados. Por favor ingrese un valor menor a 50 y mayor a 0.");
    }
}else {
    alert("El número ingresado no es un número válido. Por favor ingrese un valor numérico válido.");
}
