function numero_aleatorio(cantidad) {
    let n;
    n = Math.floor(Math.random() * cantidad);
    return n;
}
let j = 0;
function touchSong() {
    
    switch (j) {
        case 0:
            funciones.sonido("audio/touch/Xt1.mp3")
            j++
            break;
            case 1:
            funciones.sonido("audio/touch/Xt2.mp3")
            j++
            break;
            case 2:
            funciones.sonido("audio/touch/Xt3.mp3")
            j++
            break;
            case 3:
            funciones.sonido("audio/touch/Xt4.mp3")
            j++
            break;
            case 4:
            funciones.sonido("audio/touch/Xt5.mp3")
            j++
            break;
            case 5:
            funciones.sonido("audio/touch/Xt6.mp3")
            j++
            break;
            case 6:
            funciones.sonido("audio/touch/Xt6.mp3")
            j++
            break;
            case 7:
            funciones.sonido("audio/touch/Xt6.mp3")
            j++
            break;
            case 8:
            funciones.sonido("audio/touch/Xt5.mp3")
            j++
            break;
            case 9:
            funciones.sonido("audio/touch/Xt6.mp3")
            j++
            break;
            case 10:
            funciones.sonido("audio/touch/Xt3.mp3")
            j = 0
            break;
    
        default:
            break;
    }
}