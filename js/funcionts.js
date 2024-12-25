//SPAN DINAMICO DEL MAIN
const palabras = ["Somos Profesionales!","Somos Lideres!"];
let indiceActual = 0;

function cambiarPalabra() {
    const spanDinamico = document.getElementById("span-dinamico");
    spanDinamico.style.opacity = 0;

    setTimeout(() => {
        indiceActual = (indiceActual + 1) % palabras.length;
        spanDinamico.textContent = palabras[indiceActual];
        spanDinamico.style.opacity = 1;
    }, 500);
}
setInterval(cambiarPalabra, 2000);
document.getElementById("span-dinamico").textContent = palabras[indiceActual];



// ABRIR Y CERRAR POP UPS
function abrir_pop1(){
    var abrirpop1 = document.getElementById("sus_med");
    abrirpop1.style.top = "10%";
    document.body.style.overflow = 'hidden';
}

    function cerrar_pop1(){
        var cerrarpop1 = document.getElementById("sus_med");
        cerrarpop1.style.top = "-100%";
        document.body.style.overflow = 'visible';
}

//CARRUSEL DE GALERIA
