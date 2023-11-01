
function juego() {
    
    let numeroRandom = Math.floor(Math.random() * 100) + 1;
    let numero = null
    console.log(numeroRandom)
    if (numero == null) {
    numero = parseInt(prompt('Ingrese su numero'))
}
    
    while (numeroRandom != numero) {
        
        if (numeroRandom < numero) {
            numero = parseInt(prompt("es menor"));
        }
        else ( 
            
            numero= parseInt(prompt("es mayor")))
            
    }
    alert('Le pegaste rey')
}

function bucleFor() {
    
    alert('Abri la consola')
    
    let numeros= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12 ]
    for (let index = 0; index < 10; index++) {
        const element = numeros[index];
        console.log('Este numero no es mayor a 10 mira: ' + index)
    }
}
    