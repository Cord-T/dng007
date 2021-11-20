function parpadeo() {
    let ojo1 = partes.ojos.ojo1;
    let ojo2 = partes.ojos.ojo2;
    ojo1.classList.add("parpadeo");
    setTimeout(        function () {
        ojo1.classList.remove("parpadeo")  
    },500)
    ojo2.classList.add("parpadeo");
    setTimeout(        function () {
        ojo2.classList.remove("parpadeo")  
    },500)
}

function entrecerrar() {
    let ojo1 = partes.ojos.ojo1;
    let ojo2 = partes.ojos.ojo2;
    ojo1.classList.toggle("entrecerrar");
    ojo2.classList.toggle("entrecerrar");
}
function alegrarO(init) {
    let ojo1 = partes.ojos.ojo1;
    let ojo2 = partes.ojos.ojo2;
    if (init == "start") {
        ojo1.classList.add("alegrarO");
        ojo2.classList.add("alegrarO");
    }else{
        ojo1.classList.remove("alegrarO");
        ojo2.classList.remove("alegrarO");
    }
   
}

function retorcer(init) {
    if (init == "start") {
        partes.dangoBox.classList.add("retorcerse")
    }else{
        partes.dangoBox.classList.remove("retorcerse")
    }
}



function reirse(init) {
    alegrarO(init);
    retorcer(init);
}




function expresar(queExpresar) {
    switch (queExpresar) {
        case "amor":
            partes.expreBox.innerHTML = expresiones.amor[0];
            break;
            case "felicidad":
                partes.expreBox.innerHTML = expresiones.felicidad[numero_aleatorio(3)];
                break;
    
        default:
            break;
    }
}


