const argv = require('yargs').argv;

let multiplicador = 1;

while(multiplicador <=10) {
    console.log(argv.valor * multiplicador);
    multiplicador++;
} 
