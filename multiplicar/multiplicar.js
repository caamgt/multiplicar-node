const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('================'.green);
    console.log(`Tabla de ${base}`.green);
    console.log('================'.green);

    for (let i = 0; i <= limite; i++) {
        let tabla = base * i;
        console.log(`${base} * ${i} = ${tabla}`);

    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        // Verificamos que si la base no es un numero, que no haga nada.

        if (!Number(base, limite)) {
            reject(`El valor introducido ${base} no es un numero`);
            // Para que no continue.
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            let total = base * i;
            data += `${base} * ${i} = ${total}\n`;
        }


        // Creamos el archivo.
        // El primer parametro es el bombre del archiv, el segundo es el contenido.
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
            // El resolve esta esperando el nombre del archivo.
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}