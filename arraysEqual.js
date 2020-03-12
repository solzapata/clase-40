/*
* @name areArraysEqual
* @description Devuelve si dos arrays son iguales (tienen los mismos ítems en el mismo orden)
*
* @param {[]} a 
* @param {[]} b 
* @returns {Boolean} - Devuelve true si ambos arrays son iguales, false sino
*
* @example
*  areArraysEqual([1, 4], [1, 4]) // returns true
*/

const areArraysEqual = (a,b) => {
    let resultado = true;                       // pongo rtdo para luego cambiarlo si se da condicion y luego lo devuelvo
    for(let i = 0; i <= a.length; i++) {        // agregue menor igual porque sino no comparaba si uno era mas largo
        if(a[i] !== b[i]){
            resultado = false;
        }
    }
    return resultado;
}

