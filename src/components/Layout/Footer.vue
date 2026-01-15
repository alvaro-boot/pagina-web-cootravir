<template>
  <footer class="footer">
    <div class="footer-container">


      <!-- CONTENIDO PRINCIPAL DEL FOOTER -->
      <div class="footer-content">

        <div class="footer-section">
          <h4>COOTRAVIR</h4>
          <p>Cooperativa de Trabajadores de Vigilancia</p>
          <p>Proteger lo suyo es nuestro mayor compromiso</p>
          <p>
            Comprometidos con la seguridad y el bienestar de nuestros clientes.
          </p>
        </div>

        <div class="footer-section">
          <h4>Enlaces rápidos</h4>
          <router-link to="/">Inicio</router-link>
          <router-link to="/conocenos">Conócenos</router-link>
          <router-link to="/servicios">Servicios</router-link>
          <router-link to="/contactanos">Contáctanos</router-link>
        </div>

        <div class="footer-section">
          <img src="/logos/escudo.png" alt="">
        </div>

        <div class="footer-section">
          <h4>Servicios</h4>
          <router-link to="/servicios/vigilancia-fisica">
            Vigilancia física
          </router-link>
          <router-link to="/servicios/vigilancia-electronica">
            Vigilancia electrónica
          </router-link>
          <router-link to="/servicios/monitoreo-alarmas">
            Monitoreo de alarmas
          </router-link>
          <router-link to="/servicios/cootravir-ph">
            Cootravir PH
          </router-link>
        </div>

        <div class="footer-section">
          <h4>Información</h4>
          <router-link to="/proteccion-datos">
            Protección de datos
          </router-link>
          <router-link to="/solicitar-cotizacion">
            Solicitar cotización
          </router-link>
          <router-link to="/trabaja-con-nosotros">
            Trabaja con nosotros
          </router-link>
        </div>

      </div>

            <!-- BLOQUE SUPERIOR: INFORMACIÓN DE CONTACTO -->
            <div class="footer-topbar">
  <div class="footer-topbar-container">

    <div class="topbar-item">
      <span class="icon">📞</span>
      <span>(606) 335 58 08 · 317 212 41 39</span>
    </div>

    <div class="topbar-item">
      <span class="icon">⏰</span>
      <span>L–V · 7:00 a.m – 5:00 p.m</span>
    </div>

    <div class="topbar-item">
      <span class="icon">✉️</span>
      <a href="mailto:servicioalcliente@cootravir.com.co">
        servicioalcliente@cootravir.com.co
      </a>
    </div>

    <div class="topbar-item">
      <span class="icon">📍</span>
      <span>Pereira – Colombia</span>
    </div>

    <div class="topbar-social">
      <a
        href="https://www.facebook.com/profile.php?id=100077313499509"
        target="_blank"
        aria-label="Facebook"
      >
        Facebook
      </a>
      <a
        href="https://www.instagram.com/cootravir.cta/?hl=es-la"
        target="_blank"
        aria-label="Instagram"
      >
        Instagram
      </a>
    </div>

  </div>
</div>



      <!-- FOOTER INFERIOR -->
      <div class="footer-bottom">
        <p>
          &copy; {{ currentYear }} COOTRAVIR. Todos los derechos reservados.
        </p>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
