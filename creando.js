
const fs = require('fs/promises');


// función para crear archivo de texto y agregar nuevos nombres de ciudades.
const escribiendoArchivo = async () => {  
    try {
        await fs.writeFile('ciudades.txt','Agrega los nombres de las ciudades');
        console.log('Archivo creado');
    } catch (error) {
        console.log(error);
    }
}

escribiendoArchivo();

// función para leer archivo de texto. 
const leyendoArchivo = async () => {  //
    try{
        await fs.readFile('ciudades.txt');
        console.log('Los datos han sido cambiados exitosamente');
    } catch(err) {
        console.log('El dato no ha sido agregado');
    }

}

leyendoArchivo();


// función para crear objetos desde un archivo.js
const trabajandoconObjetos = async () => {
    try {
        const datos = await fs.writeFile('ciudades2.js')
        const contenidoArchivo = JSON.parse(datos);
        console.log(contenidoArchivo);
    } catch (error) {
        console.log(error)
    }
}

trabajandoconObjetos();
