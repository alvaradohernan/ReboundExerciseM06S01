
const fs = require('fs/promises');

const escribiendoArchivo = async () => {
    try {
        await fs.writeFile('ciudades.txt','Agrega los nombres de las ciudades');
        console.log('Archivo creado');
    } catch (error) {
        console.log(error);
    }
}

escribiendoArchivo();


const leyendoArchivo = async () => {
    try{
        await fs.readFile('ciudades.txt');
        console.log('Los datos han sido cambiados exitosamente');
    } catch(err) {
        console.log('El dato no ha sido agregado');
    }

}

leyendoArchivo();


const trabajandoconObjetos = async () => {
    try {
        const datos = await fs.readFile('ciudades.json')
        const contenidoArchivo = JSON.parse(datos);
        console.log(contenidoArchivo);
    } catch (error) {
        console.log(error)
    }
}

trabajandoconObjetos();
