const FooterComponent = {
    template: `
        <footer>
        <div class="experiencia">
            <div>
                <h3>Legal</h3>
                <nav class="navegacion-legal">
                    <ul>
                        <li><a href="https://www.wizardingworld.com/childrens-privacy-policy" target="_blank">Aviso de Privacidad</a></li>
                        <li><a href="https://www.wizardingworld.com/privacy" target="_blank">Aviso de cookies</a></li>
                        <li><a href="https://www.wizardingworld.com/legals" target="_blank">Aviso Legal</a></li>
                    </ul>
                </nav>
            </div>
            
            <div>
                <h3>Ayuda</h3>
                <nav class="navegacion-ayuda">
                    <ul>
                        <li><a href="preguntas-frecuentes.html">Preguntas Frecuentes</a></li>
                        <li><a href="contacto.html">Contactanos</a></li>
                        <li><a href="https://www.wizardingworld.com/terms" target="_blank">Bases y Condiciones</a></li>
                    </ul>
                </nav>
            </div>

            <div class="contenedor-redes">
                <h3>Redes <span>sociales</span></h3>
                <nav class="redes-sociales centrar-texto">                    
                    <a href="#"><i class="fa-brands fa-facebook-f icon" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa-brands fa-x-twitter icon" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa-brands fa-pinterest-p icon" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa-brands fa-youtube icon" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram icon" aria-hidden="true"></i></a>
                </nav>
            </div>
        </div>
        <p class="copyright">
            Todos los derechos Reservados PotterStore 2023.
        </p>
        </footer>
    `
};

  
const footerApp = Vue.createApp({});

footerApp.component('footer-component', FooterComponent);
footerApp.mount('#app');