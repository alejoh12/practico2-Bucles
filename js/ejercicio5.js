/*
5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :
El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 
Input:  40773821 
Output: ‘L’
*/

let numeroDNI = parseInt(prompt("Ingrese su DNI sin puntos, por favor."));

if(!isNaN(numeroDNI)) {
    if(numeroDNI >= 0 && numeroDNI <= 99999999) {
        const division = numeroDNI % 23;
        console.log("El resultado del resto de la división es:"+division);
        switch(division) {
            case 0:
                document.write(`<p>La letra que le corresponde al DNI ingresado ${numeroDNI} es:</p><h2>T</h2>`);
                break;
            case 1:
                document.write(`<p>La letra que le corresponde al DNI ingresado ${numeroDNI} es:</p><h2>R</h2>`);
                break;
            case 2:
                document.write(`<p>La letra que le corresponde al DNI ingresado ${numeroDNI} es:</p><h2>W</h2>`);
                break;
            case 3:
                document.write(`<p>La letra que le corresponde al DNI ingresado ${numeroDNI} es:</p><h2>A</h2>`);
                break;
            case 4:
                document.write(`<p>La letra que le corresponde al DNI ingresado ${numeroDNI} es:</p><h2>G</h2>`);
                break;
            case 5:
                document.write(`<p>La letra que le corresponde al DNI ingresado ${numeroDNI} es:</p><h2>M</h2>`);
                break;
            case 6:
                document.write(`<p>La letra que le corresponde al DNI ingresado ${numeroDNI} es:</p><h2>Y</h2>`);
                break;
            case 7:
                document.write(`<p>La letra que le corresponde al DNI ingresado ${numeroDNI} es:</p><h2>F</h2>`);
                break;
            case 8:
                document.write(`<p>La letra que le corresponde al DNI ingresado ${numeroDNI} es:</p><h2>P</h2>`);
                break;
            case 9:
                document.write(`<p>La letra que le corresponde al DNI ingresado ${numeroDNI} es:</p><h2>D</h2>`);
                break;
            case 10:
                document.write(`<p>La letra que le corresponde al DNI ingresado ${numeroDNI} es:</p><h2>X</h2>`);
                break;
            case 11:
                document.write(`<p>La letra que le corresponde al DNI ingresado ${numeroDNI} es:</p><h2>B</h2>`);
                break;
            case 12:
                document.write(`<p>La letra que le corresponde al DNI ingresado ${numeroDNI} es:</p><h2>N</h2>`);
                break;
            case 13:
                document.write(`<p>La letra que le corresponde al DNI ingresado ${numeroDNI} es:</p><h2>J</h2>`);
                break;
            case 14:
                document.write(`<p>La letra que le corresponde al DNI ingresado ${numeroDNI} es:</p><h2>Z</h2>`);
                break;
            case 15:
                document.write(`<p>La letra que le corresponde al DNI ingresado ${numeroDNI} es:</p><h2>S</h2>`);
                break;
            case 16:
                document.write(`<p>La letra que le corresponde al DNI ingresado ${numeroDNI} es:</p><h2>Q</h2>`);
                break;
            case 17:
                document.write(`<p>La letra que le corresponde al DNI ingresado ${numeroDNI} es:</p><h2>V</h2>`);
                break;
            case 18:
                document.write(`<p>La letra que le corresponde al DNI ingresado ${numeroDNI} es:</p><h2>H</h2>`);
                break;
            case 19:
                document.write(`<p>La letra que le corresponde al DNI ingresado ${numeroDNI} es:</p><h2>L</h2>`);
                break;
            case 20:
                document.write(`<p>La letra que le corresponde al DNI ingresado ${numeroDNI} es:</p><h2>C</h2>`);
                break;
            case 21:
                document.write(`<p>La letra que le corresponde al DNI ingresado ${numeroDNI} es:</p><h2>K</h2>`);
                break;
            case 22:
                document.write(`<p>La letra que le corresponde al DNI ingresado ${numeroDNI} es:</p><h2>E</h2>`);
                break;
        }
    }else {
        alert("El número de DNI ingresado no es un número de DNI válido. Por favor, reingrese un número entre 0 y 99999999.");
    }
}else {
    alert("El número de DNI ingresado no es un número valido. Por favor, reingrese un número válido.");
}