const { crearArchivo } = require('./helpers/multiplicar');
const argv=require('./config/yargs');
// como no uso el metodo se puede importar como abajo
require('colors');

console.clear();
console.log("Hasta -> ", argv.h);
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log('Se creo el Archivo: '.bgRed.white, nombreArchivo.inverse))
    .catch(err=>console.log(err));


    