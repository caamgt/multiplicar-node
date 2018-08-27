// El final .argv es para utilizar el argv.argv, como se estab utilizando.
const argv = require('./config/yargs').argv;
// Para cambiar los colores en la consola.
const colors = require('colors/safe');

// Requireds
// Estis se ponen antes que todo.
// Hay 3 tipos de requires
// "Express" es un paquete que se instala, no es nativo de NODE.
//const fs = require('express');
// Archivos que nosotros creamos.
//const fs = require('./');
// "fs" es propio de NODEJS
//const fs = require('fs');

// Destructuracion, cuando "let" o const estan seguidas por llaves.
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:', colors.green(`${archivo}`)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}

let argv2 = process.argv;

console.log(argv);