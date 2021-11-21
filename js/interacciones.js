
// AL HACER CLICK EN LA CABEZA



hitbox.cabeza.onmousedown = function (event) {
    permisos.tocandoCabeza = true;
    animaciones.dango.ojos.entrecerrar(true);
    permisos.parpadear = false;
    animaciones.dango.dangoBox.aplastar(true);


    // Funcion sin uso por ahora
    hitbox.cabeza.onmousemove = function (event) {};


// AL SOLTAR CLICK DE LA CABEZA 

hitbox.cabeza.onmouseup = function (event) {

    if (permisos.tocandoCabeza == true) {
    animaciones.dango.ojos.entrecerrar(false);
    expresar("amor");
    permisos.parpadear = true;
    animaciones.dango.dangoBox.aplastar(false);
    funciones.sonido("audio/dango/loveExpresion.mp3")
    permisos.tocandoCabeza = false;
    }

}
hitbox.cabeza.onmouseleave = function (event) {
    if (permisos.tocandoCabeza == true) {
    animaciones.dango.ojos.entrecerrar(false);
    expresar("amor");
    permisos.parpadear = true;
    animaciones.dango.dangoBox.aplastar(false);
    funciones.sonido("audio/dango/loveExpresion.mp3")
    permisos.tocandoCabeza = false;
    }
    

};

};




// AL TOCAR LA CABEZA -----(MOVIL)-----(Solo CHROME)----


hitbox.cabeza.addEventListener("touchstart", function (event) {

    permisos.tocandoCabeza = true;
    animaciones.dango.ojos.entrecerrar(true);
    permisos.parpadear = false;
    animaciones.dango.dangoBox.aplastar(true);




// Funcion sin uso por ahora
    hitbox.cabeza.addEventListener("touchmove", function (event) {});


// AL SOLTAR LA CABEZA -----(MOVIL)-----(Solo CHROME)----

hitbox.cabeza.addEventListener("touchend", function (event) {
    if (permisos.tocandoCabeza == true) {
        animaciones.dango.ojos.entrecerrar(false);
        expresar("amor");
        permisos.parpadear = true;
        animaciones.dango.dangoBox.aplastar(false);
        funciones.sonido("audio/dango/loveExpresion.mp3")
        permisos.tocandoCabeza = false;
    }

})
hitbox.cabeza.addEventListener("touchcancel", function (event) {
    if (permisos.tocandoCabeza == true) {
        animaciones.dango.ojos.entrecerrar(false);
        expresar("amor");
        permisos.parpadear = true;
        animaciones.dango.dangoBox.aplastar(false);
        funciones.sonido("audio/dango/loveExpresion.mp3")
        permisos.tocandoCabeza = false;
    }

})

});




// barriga
// ---
// ---
// ---

// AL HACER CLICK EN LA BARRIGA

hitbox.barriga.onmousedown = function (event) {
    permisos.tocandoBarriga = true;
    reirse(true);
    permisos.parpadear = false;



    // FUNCION SIN USO POR AHORA 
    hitbox.cabeza.onmousemove = function (event) {}



    // AL SOLTAR EL CLICK DE LA BARRIGA

    hitbox.barriga.onmouseup = function (event) {
        if (permisos.tocandoBarriga == true) {
        reirse(false)
        expresar("felicidad");
        permisos.parpadear = true;
        funciones.sonido("audio/randomTouch2.mp3")
        permisos.tocandoBarriga = false;
    }
    };
    hitbox.barriga.onmouseleave = function (event) {
        if (permisos.tocandoBarriga == true) {
        reirse(false)
        expresar("felicidad");
        permisos.parpadear = true;
        funciones.sonido("audio/randomTouch2.mp3")
        permisos.tocandoBarriga = false;
    }
    };
    
        


};





// AL TOCAR LA BARRIGA -----(MOVIL)-----(SOLO CHROME)

hitbox.barriga.addEventListener("touchstart", function (event) {
    permisos.tocandoBarriga = true;
    reirse(true);
    permisos.parpadear = false;




    // FUNCION SIN USO TODAVIA 
    hitbox.barriga.addEventListener("touchmove", function (event) {});


    // AL SOLTAR LA BARRIGA -----(MOVIL)-------(SOLO CHROME)
     hitbox.barriga.addEventListener("touchend", function (event) {
        if (permisos.tocandoBarriga == true) {
            reirse(false)
            expresar("felicidad");
            permisos.parpadear = true;
            funciones.sonido("audio/randomTouch2.mp3")
            permisos.tocandoBarriga = false;
        }
    });
    hitbox.barriga.addEventListener("touchcancel", function (event) {
        if (permisos.tocandoBarriga == true) {
            reirse(false)
            expresar("felicidad");
            permisos.parpadear = true;
            funciones.sonido("audio/randomTouch2.mp3")
            permisos.tocandoBarriga = false;
        }
    });
});













// EVENTOS PARA BOTONES 

interfaz.botones.configBtn.onclick = function (event) {
    interfaz.menus.menuPrincipal.classList.toggle("hiddenRight");
    
}
interfaz.botones.invBtn.onclick = function (event) {
    interfaz.menus.standartInvMen.classList.toggle("hiddenTop");
   
}
interfaz.botones.getOutBtn.onclick = function (event) {
    interfaz.loadScreen.classList.toggle("hiddenLeft");
    setTimeout(() => {
        interfaz.loadScreen.classList.toggle("hiddenRight");
    }, 3000);
}

