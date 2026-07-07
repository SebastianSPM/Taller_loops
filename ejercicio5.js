
let totalusuario = 0;
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
    totalusuario = 0;

    for(let j = 0; j < usuarios[i].movimientos.length; j++){    
        totalusuario += usuarios[i].movimientos[j]
    }
    console.log(`Total: ${totalusuario}`);
    
}