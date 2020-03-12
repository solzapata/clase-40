/*usamos funcion para ejecutar un codigo que vamos a repetir
los parametros son variables que podemos enviar para que sean trabajadas en la funcion
las funciones pueden devolver valores. las tengo que pensar como valores
return regresa el valor que despues voy a usar si llamo a la funcion
puedo guardar las funciones en una variable
el valor de return se asigna a la variable
con return se corta la funcion
una funcion se debe dedicar solo a una cosa

function saludo = (nombre) => {
    return ("hola" + nombre);
}
saludo(Sol)                         la estoy llamando y le paso el parametro entonces se va a ver hola Sol


function suma (numero1, numero2) {
    return numero1 + numero2;
}
console.log(suma(2,3));

const suma = function(numero1, numero2) {
    return numero1 + numero2;
}
console.log(suma(2,3));

function valorMaximo (valor1, valor2) {                      const valorMaximo = function(valor1, valor2) {
    if(valor1 > valor2) {
        return valor1;
    } else {
        return valor2;
    }
}
console.log("El numero mas grande es: " + valorMaximo(10,20));

*/