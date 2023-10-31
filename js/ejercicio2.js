/* 2- Escribir un programa que solicite una nota (número) de 0 a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
Ejemplo:
Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido */

let nota = parseInt(prompt("Ingrese una nota entre 0 y 10, por favor."));

if(!isNaN(nota)) {
    console.log("Es correcto. Ingresaste un número.");
    if(nota >= 0 && nota <=10){
        console.log("Es una nota correcta.");
        if(nota <= 2 && nota >= 0) {
            alert("Muy deficiente.");
        };
        if(nota <= 4 && nota >= 3) {
            alert("insuficiente.");
        };
        if(nota <= 6 && nota >= 5) {
            alert("Suficiente.");
        };
        if(nota === 7) {
            alert("Bien.");
        };
        if(nota <= 9 && nota >= 8) {
            alert("Notable.");
        };
        if(nota === 10) {
            alert("Sobresaliente.");
        };
    }else {
        alert("número erróneo");
    }
}else {
    alert("Introduce un número válido");
}
