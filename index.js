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

