/*
* @name getFactorial
* @description Devuelve el factorial de un número
*
* @param {number} x - Número del cuál obtener factorial
* @returns {Number} - Factorial de {x}
*
* @example
*  getFactorial(4) // returns 24
*/

const getFactorial = (x) => {
    let factorial = 1;
    for(let i = x; i > 0; i--){       //desde el factorial va bajando hasta 1
        factorial *= i;              // voy multiplicando esos numeros q da i 
    }
    return factorial;
}





