
//Declaración e inicialización de variables y arreglo
const movimientos = [300000, 20000, -10000, 400000, -50000, 80000];
let total = 0.0;
let cantidadRetiros = 0;

//Proceso
for(let i = 0; i < movimientos.length; i+=1){
    if(movimientos[i] < 0){
        cantidadRetiros++;
    }else{
        cantidadRetiros++;
        total += movimientos[i];
    }
}

//salida de datos
console.log(`Cantidad de retiros: ${cantidadRetiros}`);
console.log(`Total: ${total}`);

