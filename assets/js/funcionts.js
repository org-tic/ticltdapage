//SPAN DINAMICO DEL MAIN
const palabras = ["Somos profesionales!","Somos líderes!"];
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



// HORA EN TIEMPO REAL PHONE
function updateTime() {
    const now = new Date();
    let horas = now.getHours();
    let minutos = now.getMinutes();
    
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;

    document.getElementById("current-time").textContent = `${horas}:${minutos}`;
}

setInterval(updateTime, 1000);

updateTime();

