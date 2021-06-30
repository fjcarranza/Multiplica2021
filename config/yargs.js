const argv = require('yargs')
    .option('b',{
        alias:'base',
        type:'number',
        demandOption:true,
        describe: 'Es la Base de la multiplicacion'

    })
    .option('l',{
        alias:'listar',
        type: 'boolean',
        demandOption:false,
        default:false, 
        describe: 'Lista por pantalla la Tabla', 
        

    })
    .option('h',{
        alias:'hasta',
        default: 9, 
        type: 'number',
        describe: 'Limite Hasta al que genera la Tabla', 
    })
    .check((argv, options)=>{
        if(isNaN(argv.b)){throw "No Cargo una valor correcto de la base";}
        if (isNaN(argv.h) | (argv.h<0 )){throw "No Cargo un Limite conrrecto en Hasta";}
        return true;
   })
   .argv;

    module.exports=argv;