const fs=require('fs');
const colors = require('colors');    

const crearArchivo = async( base = 5, l=true, hasta) => {
    
    let salida='';
    let archivo='';
    salida+="==============================\n";
    salida+=`   Tabla del ${base}    \n`;
    salida+="==============================\n";
    archivo=salida;
    salida=salida.red
    let res=''
    for (let i = 1; i <= hasta; i++) {
        archivo+=` ${base} x ${i} = ${base*i} \n`
        salida+=` ${base} ${'x'.green} ${i} ${'='.green}`
        salida+= colors.blue(base*i)
        salida+='\n'
    }
    salida+=colors.brightGreen(res)
    salida+="==============================\n".red;
    if(l){console.log(salida)}
             
    fs.writeFileSync(`./txt/tabla-${base}.txt`, archivo);
    return `tabla-${base}.txt`;
}



module.exports = {
    crearArchivo
} 