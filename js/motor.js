var estadoLicuadora = "apagada";
var licuadora = document.getElementById("blender");
var sonidoLicuadora= document.getElementById("blender-sound");
var sonidoBoton= document.getElementById("blender-button-sound");

function controlarLicuadora(){
    if (estadoLicuadora == "apagada"){
        estadoLicuadora = "encendida";
        hacerBrrBrr();
        licuadora.classList.add("active");
        console.log("Me prendiste");
    }else{
        estadoLicuadora = "apagada";
        hacerBrrBrr();
        licuadora.classList.remove("active");
        console.log("Me apagaste");
    }
}

function hacerBrrBrr(){
    if (sonidoLicuadora.paused){
        sonidoBoton.play();
        sonidoLicuadora.play();
    }else{
        sonidoBoton.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}