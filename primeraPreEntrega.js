let numeroRandom = Math.floor(Math.random() * 100) + 1;
console.log(numeroRandom)
let numero = parseInt(prompt('Ingrese su numero'));
while (numeroRandom != numero) {

    if (numeroRandom > numero) {
        console.log('El numero elegido es menor');

    }
    else {
        console.log('El numero es mayor');
    }
}
console.log('Le pegaste rey')