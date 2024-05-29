//busca todos los id//
const inputQuantities=document.querySelectorAll(".input-quantity")
const btnIncrements=document.querySelectorAll("#increment")
const btnDecrements=document.querySelectorAll("#decrement")

btnIncrements.forEach((btnIncrement, index) => {
    btnIncrement.addEventListener("click", () => {
        //contador
        let valueByDefault = parseInt(inputQuantities[index].value);
        valueByDefault += 1;
        inputQuantities[index].value = valueByDefault;
    });
});

btnDecrements.forEach((btnDecrement, index) => {
    btnDecrement.addEventListener("click", () => {
        //contador
        let valueByDefault = parseInt(inputQuantities[index].value);
        if (valueByDefault === 1) {
            return;
        }
        valueByDefault -= 1;
        inputQuantities[index].value = valueByDefault;
    });
});


//  Función para el dropdown
const productosLink = document.querySelector('.nav-link[href="productos.html"]');

//  verifica si el ancho de la ventana es igual o menor a 991 píxeles
const isMobileScreen = () => {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth;
    return screenWidth <= 991;
};

productosLink.addEventListener('click', function(event) {
    if (isMobileScreen()) { //  Verifica si se está en una pantalla móvil
        return;
    }
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    window.location.href = this.getAttribute('href');
});



//  Función del navbar
//  Función anónima 
(function() {
    const nav = document.querySelector('.navbar');
    if(window.innerWidth >= 992) { //  Ventana tiene un ancho mayor o igual a 992 píxeles
        if(window.scrollY <= 0) { //  Scroll vertical
            nav.classList.add('bg-transparent'); //  Agrega o elimina la clase bg-transparent de Bootstrap
        } else {
            nav.classList.remove('bg-transparent');
        }
    }
})();

//  Evento onscroll
window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    if(window.innerWidth >= 992) {
        if(window.scrollY <= 0) {
            nav.classList.add('bg-transparent');
        } else {
            nav.classList.remove('bg-transparent');
        }
    }
};

//  Evento onresize
window.onresize = function() {
    const nav = document.querySelector('.navbar');
    if(window.innerWidth < 992) {
        nav.classList.remove('bg-transparent');
    } else if(window.scrollY <= 0) {
        nav.classList.add('bg-transparent');
    }
};


// function updateNavbarAppearance() {
//     const nav = document.querySelector('.navbar');
//     if (window.innerWidth >= 992) {
//         if (window.scrollY <= 0) {
//             nav.classList.add('bg-transparent');
//         } else {
//             nav.classList.remove('bg-transparent');
//         }
//     } else {
//         nav.classList.remove('bg-transparent');
//     }
// }

// window.addEventListener('load', updateNavbarAppearance);
// window.addEventListener('scroll', updateNavbarAppearance);
// window.addEventListener('resize', updateNavbarAppearance);