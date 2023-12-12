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