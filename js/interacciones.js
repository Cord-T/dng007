hitbox.cabeza.onmousedown = function (event) {
    entrecerrar();
    hitbox.cabeza.onmousemove = function (event) {
        console.log("acariciando")
    }
}
hitbox.cabeza.onmouseup = function (event) {
    entrecerrar();
    expresar("amor");
}

hitbox.cabeza.addEventListener("touchstart", function (event) {
    entrecerrar();
    
    hitbox.cabeza.addEventListener("touchmove", function (event) {
        console.log("acariciando")
     
    });
});


hitbox.cabeza.addEventListener("touchend", function (event) {
    expresar("amor");
    entrecerrar();
})


// barriga
// ---
// ---
// ---



hitbox.barriga.onmousedown = function (event) {
    reirse("start");
    
    hitbox.cabeza.onmousemove = function (event) {}
}
hitbox.barriga.onmouseup = function (event) {
    reirse("stop")
    expresar("felicidad");

}

hitbox.barriga.addEventListener("touchstart", function (event) {
    reirse("start");
    hitbox.barriga.addEventListener("touchmove", function (event) {
    console.log("acariciando")
     
    });
});


hitbox.barriga.addEventListener("touchend", function (event) {
    reirse("stop")
    expresar("felicidad");
})




interfaz.botones.configBtn.onclick = function (event) {
    interfaz.menus.menuPrincipal.classList.toggle("oculto");
}
interfaz.botones.invBtn.onclick = function (event) {
    interfaz.menus.standartInvMen.classList.toggle("oculto");
}

