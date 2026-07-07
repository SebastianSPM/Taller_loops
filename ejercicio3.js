const prompt = require("prompt-sync")();

let opcion = 0;
let stop = 1;


do{
    console.log("\n *** MENÚ *** ");
    console.log("1) Ver saldo.");
    console.log("2) Envíar dinero.");
    console.log("3) Recargar.");
    console.log("4) Salir.");

    opcion = parseInt(prompt("Ingresa la opción: "));

    switch(opcion){
        case 1:

            break;
        case 2:

            break;

        case 4:
            console.log("\nGracias por usar nuestro servicio :D\n");
            stop = 0
            
            break;

        default:
            console.log("\nNo existe esa opción, intentelo de nuevo...\n");
            break;
    }

}while(stop != 0);

