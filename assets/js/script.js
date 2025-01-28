// variables para las imágenes grandes y miniaturas
const imgs = [
    document.getElementById('img__1'),
    document.getElementById('img__2'),
    document.getElementById('img__3'),
];
const imgs_min = [
    document.getElementById('img__1__min'),
    document.getElementById('img__2__min'),
    document.getElementById('img__3__min'),
];

// cambiar la imagen seleccionada
function changeImage(selectedIndex) {
    imgs.forEach((img, index) => {
        if (index === selectedIndex) {
            // imagen seleccionada pasa al centro
            img.style.transform = 'translateX(0) scale(1)';
            img.style.opacity = '1';
            img.style.zIndex = '100';
        } else if ((index + 1) % 3 === selectedIndex) {
            // imagen de la izquierda
            img.style.transform = 'translateX(-200px) scale(0.8)';
            img.style.opacity = '0.8';
            img.style.zIndex = '1';
        } else {
            // imagen de la derecha
            img.style.transform = 'translateX(200px) scale(0.8)';
            img.style.opacity = '0.8';
            img.style.zIndex = '1';
        }
    });

    imgs_min.forEach((mini, index) => {
        if (index === selectedIndex) {
            mini.classList.add('img_active');
        } else {
            mini.classList.remove('img_active');
        }
    });
}

// Asignar eventos a las miniaturas
imgs_min.forEach((mini, index) => {
    mini.onclick = () => changeImage(index);
});
