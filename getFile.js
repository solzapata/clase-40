/*
* @name getFileExtension
* @description Obtiene la extensión de un archivo
*
* @param {string} file - El nombre del archivo a obtener la extensión 
* @returns {String} - La extensión del archivo
* 
* @example
*  getFileExtension("imagen.jpg") // returns "jpg"
*/

const getFileExtension = (file) => {
    let filteredFile = file.split('.');      // crea un array con dos elementos, uno del nombre y uno de la extension
    return filteredFile[1];
}




