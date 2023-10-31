// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = parseInt(prompt("Ingrese su edad por favor."));

if (!isNaN(edad)) {  
  if (edad >= 18) {
    alert("Felicidades. Ya tienes edad para conducir.");
  };
}else {  
  alert(
    "La edad ingresada no es un número valido. Por favor, reingrese el número de su edad."
  );
}