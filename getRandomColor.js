/*
* @name getRandomColorSequence
* @description Devuelve una secuencia aleatoria de ciertos colores con cierta longitud
* 
* @param {string[]} colors - Array de colores a ser utilizados en la secuencia
* @param {number} length - Longitud de la secuencia
* @returns {String[]} - Secuencia aleatoria de colores disponibles en {colors}, con longitud {length}
*
* @example
*  getRandomColorSequence(["red", "blue", "green"], 4) // returns ['blue', 'red', 'red', 'green']
*/

const getRandomColorSequence = (colors, length) => {
    let sequence = [];

    for(let i = 0; i < length; i++){           // es hasta length porque arranca de 0
        sequence.push(colors[Math.round(Math.random() * (length - 1))]);        // random de indice de colors y hasta menos de length porque arranca de 0
    }

    return sequence;
}


