const movimientos = [300000, 0, -10000, "un pago a comercio", -50000, 0];

let posicionEncontrada = 0;

for(let i = 0; i < movimientos.length; i+=1){
    if(movimientos[i] == 0){
        continue
    }else if(movimientos[i] == "un pago a comercio"){
        console.log("posición: ", i);
        break
    }
}