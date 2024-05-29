const ProductoComponent = {
    props: ['producto', 'cantidad'],
    data() {
        return {
            cantidadLocal: this.cantidad,
            idiomaSelec: ''
        }
    },
    template: `
        <div class="container-info-producto">
            <div class="container-precio">
                <span>{{ totalPrice }}</span> 
                <h3>{{ producto.nombre }}</h3>
            </div>
            <div class="container-detalles-productos">
                <div class="form-group">
                   <label for="libro">Idioma</label>
                   <select name="libro" id="libro" v-model="idiomaSelec">
                       <option disabled selected value="">Elija una opción</option>
                       <option value="kids">Español</option>
                       <option value="adults">Inglés</option>
                   </select>
                </div>
                <button class="btn-clean" @click="reset">Limpiar</button>
                <div class="carrito">
                   <div class="container-quantity">
                        <input 
                        type="number" 
                        placeholder="1" 
                        value="1" 
                        min="1"
                        class="input-quantity"
                        v-model="cantidadLocal"
                        @keypress="checkInput"
                        @input="validateInput">
                        <div class="btn-increment-decrement">
                            <i class="fa-solid fa-chevron-up" id="increment" @click="increment"></i>
                            <i class="fa-solid fa-chevron-down" id="decrement" @click="decrement"></i>
                        </div>
                   </div>
                   <button class="btn-carrito">
                       <i class="fa-solid fa-plus"></i>
                       Añadir al carrito
                   </button>
                </div>
                <div class="container-descripcion">
                   <div class="titulo-descripcion">
                       <h4>Descripción</h4>
                   </div>
                   <div class="texto-descripcion">
                       <p>{{ producto.descripcion }}</p>
                   </div>
                </div>
            </div>
        </div>
    `,

    watch: {
        cantidadLocal(newVal) {
            const max = 50; 
            if (newVal === '' || isNaN(newVal)) {  //  Comprueba si es un valor vacío o no numérico 
                this.$nextTick(() => this.cantidadLocal = 1);
            } else if (newVal > max) {
                this.$nextTick(() => this.cantidadLocal = max);
            }
        }
    },

    methods: {
        increment() {
            this.cantidadLocal++;
        },
        decrement() {
            if (this.cantidadLocal > 1) {
                this.cantidadLocal--;
            }
        },
        reset() {
            this.cantidadLocal = 1;
            this.idiomaSelec = '';
        },
        checkInput(event) {  //  ingresado no es un número y previene su entrada si no es un número del 0 al 9
            const ascii = event.key.charCodeAt(0);
            if (ascii < 48 || ascii > 57) {
                event.preventDefault();
            }
        },
        validateInput(event) {   //  Valida la entrada en el campo de cantidad 
            let value = event.target.value;
            const max = 50; 
            if (value === '') {
                this.cantidadLocal = '';
            } else {
                value = Number(value);
                if (value < 1) {
                    this.cantidadLocal = 1;
                } else if (value > max) {
                    this.cantidadLocal = max;
                } else {
                    this.cantidadLocal = value;
                }
            }
        }    
    },

    computed: {
        totalPrice() {  //  Calcular el precio total del producto.
            const precioenPesos = Number(this.cantidadLocal) * Number(this.producto.precio);
            return accounting.formatMoney(precioenPesos, {
                symbol: '$',
                format: '%s %v',
                decimal: ',',
                thousand: '.',
                precision: 2
            });
        }
    }
};
  
const productoApp = Vue.createApp({
    data() {
        return {
            cantidad: 1,
            productos: [
                {
                    nombre: 'HP y Las Reliquias de la Muerte',
                    precio: 16800,
                    descripcion: 'Esta bufanda encantadora está inspirada en una las casas de Hogwarts y presenta los colores y el emblema distintivo de Slytherin. Fabricada con tejido de alta calidad, esta bufanda no solo te mantendrá abrigado durante los días fríos, sino que también te sumergirá en la atmósfera mágica de la famosa escuela de magia.'
                },
            ]
        };
    },
});

productoApp.component('producto-component', ProductoComponent);
productoApp.mount('#producto-app');