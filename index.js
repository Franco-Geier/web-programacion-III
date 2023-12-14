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

// Funcion para el dropdown
const productosLink = document.querySelector('.nav-link[href="productos.html"]');

const isMobileScreen = () => {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth;
    return screenWidth <= 991;
};

productosLink.addEventListener('click', function(event) {
    if (isMobileScreen()) {
        return;
    }
    event.preventDefault();
    window.location.href = this.getAttribute('href');
});


// Función del navbar
(function() {
    const nav = document.querySelector('.navbar');
    if(window.innerWidth >= 992) {
        if(window.scrollY <= 0) {
            nav.classList.add('bg-transparent');
        } else {
            nav.classList.remove('bg-transparent');
        }
    }
})();


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


window.onresize = function() {
    const nav = document.querySelector('.navbar');
    if(window.innerWidth < 992) {
        nav.classList.remove('bg-transparent');
    } else if(window.scrollY <= 0) {
        nav.classList.add('bg-transparent');
    }
};

  