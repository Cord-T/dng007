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

function alegrarO(init) {
    let ojo1 = partes.ojos.ojo1;
    let ojo2 = partes.ojos.ojo2;
    if (init == "start") {
        ojo1.classList.add("alegrar");
        ojo2.classList.add("alegrar");
    }else{
        ojo1.classList.remove("alegrar");
        ojo2.classList.remove("alegrar");
    }
   
}


function reirse(init) {
    animaciones.dango.ojos.forzar(init);
    animaciones.dango.dangoBox.retorcerse(init);
}

const animaciones = {
    dango:{
        dangoBox:{
            aplastar: (trFls) =>{
                switch (trFls) {
                    case true:
                        partes.dangoBox.classList.add("dangoBoxSm");
                        break;
                        case false:
                        partes.dangoBox.classList.remove("dangoBoxSm");
                        break;
                
                    default:
                        break;
                }
                
            },
            retorcerse:(trFls) =>{
                switch (trFls) {
                    case true:
                        partes.dangoBox.classList.add("retorcerse");
                        break;
                        case false:
                        partes.dangoBox.classList.remove("retorcerse");
                        break;
                    default:
                        break;
                }; 
            },
        },
        ojos:{
            entrecerrar: (trFls) =>{  
            switch (trFls) {
                case true:
                    partes.ojos.ojo1.classList.add("entrecerrar");
                    partes.ojos.ojo2.classList.add("entrecerrar");
                    break;
                    case false:
                        partes.ojos.ojo1.classList.remove("entrecerrar");
                        partes.ojos.ojo2.classList.remove("entrecerrar");
                        break;
            
                default:
                    break;
                };

            },
            forzar:(trFls) =>{
                switch (trFls) {
                    case true:
                        partes.ojos.ojo1.classList.add("forzar");
                        partes.ojos.ojo2.classList.add("forzar");
                        break;
                        case false:
                            partes.ojos.ojo1.classList.remove("forzar");
                            partes.ojos.ojo2.classList.remove("forzar");
                            break;
                
                    default:
                        break;
                    };
            }
        },


    },



};




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


