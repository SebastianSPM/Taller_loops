const prompt = require("prompt-sync")();

let pin = 0;
let pinCorrecto = 6565;
let stop = 1;
let numerointentos = 0;
const intento = []

while(stop != 0){
    let pin = parseInt(prompt("Ingresa el PIN: "));
    numerointentos++

    if(pinCorrecto == pin){
        console.log(" **** BIENVENIDO **** ");
        stop = 0;
        
    }else if(numerointentos >= 3){
        console.log("¡BLOQUEADO!");
        
        stop = 0;
    }else{
        intento.push(pin)
        console.log(`¡PIN INCORRECTO!, Tienes ${3 - numerointentos}`);
    }

}

module.exports = prompt