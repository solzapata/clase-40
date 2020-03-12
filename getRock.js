/*
* @name getRockPaperScissor
* @description Devuelve una jugada aleatoria de piedra, papel o tijera
* 
* @returns {String} - Devuelve "rock", "paper" o "scissor"
*
* @example
*  getRockPaperScissor() // returns "paper"
*/

const getRockPaperScissor = () => {
    const options = ["rock", "paper", "scissor"]

    return options[Math.round(Math.random() * (options.length - 1))]    //hasta menos uno de length porq arranca en 0
}

