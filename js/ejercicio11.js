/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/

let nombrePrimera = prompt("Por favor ingrese un nombre.");
let edadPrimera = parseInt(prompt(`Por favor ahora ingrese la edad de ${nombrePrimera}`));
let nombreSegunda = prompt("Por favor ingrese otro nombre.");
let edadSegunda = parseInt(prompt(`Por favor ahora ingrese la edad de ${nombreSegunda}`));
let nombreTercera = prompt("Por favor ingrese el último nombre.");
let edadTercera = parseInt(prompt(`Por favor ahora ingrese la edad de ${nombreTercera}`));

if (edadPrimera > edadSegunda && edadPrimera > edadTercera) {
    document.write(`<h2>El nombre de la persona con edad mayor es '${nombrePrimera}'</h2>`);
};
if (edadSegunda > edadPrimera && edadSegunda > edadTercera) {
    document.write(`<h2>El nombre de la persona con edad mayor es '${nombreSegunda}'</h2>`);
};
if (edadTercera > edadSegunda && edadTercera > edadPrimera) {
    document.write(`<h2>El nombre de la persona con edad mayor es '${nombreTercera}'</h2>`);
};