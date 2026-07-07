const usuarios = [
    {
        usuario:"Sebastian",
        movimientos:[30000,20000]
    },
    {
        usuario:"Daniel",
        movimientos:[60000,40000]
    },
    {
        usuario:"Oscar",
        movimientos:[90000,80000]
    }
]

for(let i = 0; i < usuarios.length; i++){
    console.log("\nUsuario: ", usuarios[i].usuario);
    console.log("Movimientos: ");
    for(let j = 0; j < usuarios[i].movimientos.length; j++){    
        console.log((j+1), usuarios[i].movimientos[j]);
    }
    console.log("\n");
}