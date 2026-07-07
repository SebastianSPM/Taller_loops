const usuarios = [
    {
        usuario:"Sebastian",
        movimientos:[
            {
                1:30000
            },
            {
                2:20000
            }
        ]
    },
    {
        usuario:"Daniel",
        movimientos:[
            {
                1:60000
            },
            {
                2:40000
            }
        ]
    },
    {
        usuario:"Oscar",
        movimientos:[
            {
                1:20000
            },
            {
                2:90000
            }
        ]
    }
]

for(let i = 0; i < usuarios.length; i++){
    
    for(let j = 0; j < i; j++){
        console.log("Usuario: ", usuarios[i].usuario);
        console.log("\nMovimientos: ", usuarios[i].movimientos[i]);
    }
}