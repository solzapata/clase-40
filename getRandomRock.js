/*
* @name getRockPaperScissorRandomSequence
* @description Devuelve una secuencia aleatoria de jugadas de piedra, papel o tijera, con cierta longitud
*
* @param {number} length - Longitud de la secuencia
* @returns {String[]}
*
* @example
*  getRockPaperScissorRandomSequence(4) // returns ["rock", "paper", "rock", "scissor"]
*/

const getRockPaperScissorRandomSequence = (length) => {
    let options = ["rock", "paper", "scissor"];
    let play = [];

    for(let i = 0; i < length; i++){
        play.push(options[Math.round(Math.random() * 2)])    //agrego elementos con indice random hasta q llegue al nro pedido
    }

    return play;
}

