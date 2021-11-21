const hitbox = {
    cabeza: document.getElementById("cabezaH"),
    barriga: document.getElementById("barrigaH")
};

const interfaz = {
    botones: {
        configBtn: document.getElementById("menuBtn"),
        invBtn: document.getElementById("invBtn"),
        getOutBtn: document.getElementById("getOutBtn")
    },
    menus: {
        standartInvMen: document.getElementById("standartInvMen"),
        menuPrincipal: document.getElementById("menuPrincipal"),
    },
    sound: document.getElementById("sound"),
    loadScreen: document.getElementById("loadScreen")
}

const partes = {
    dangoBox: document.getElementById("dangoBox"),
    expreBox: document.getElementById("expresiones"),
    ojos:{
        ojo1: document.getElementById("ojo1"),
        ojo2: document.getElementById("ojo2")
    }
};

const funciones = {
    sonido: (audio) => {
        interfaz.sound.setAttribute("src",audio)
        interfaz.sound.play();
    }
}



 


