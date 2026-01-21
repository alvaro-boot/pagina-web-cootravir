<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- TOPBAR (contacto rápido) -->
      <div class="footer-topbar">
        <div class="footer-topbar-container">
          <div class="topbar-item">
            <span class="mdi mdi-phone"></span>
            <a>(606) 335 58 08 · 317 212 41 39</a>
          </div>

          <div class="topbar-item">
            <span class="mdi mdi-clock-time-eleven"></span>
            <a>L–V · 7:00 a.m – 5:00 p.m</a>
          </div>

          <div class="topbar-item">
            <span class="mdi mdi-face-agent"></span>
            <a href="mailto:servicioalcliente@cootravir.com.co">
              servicioalcliente@cootravir.com.co
            </a>
          </div>

          <div class="topbar-item">
            <span class="mdi mdi-city"></span>
            <a>Pereira – Colombia</a>
          </div>
        </div>
      </div>

      <!-- MAIN -->
      <div class="footer-main">
        <div class="footer-brand">
          <div class="footer-brand-row">
            <img class="footer-badge" src="/logos/escudo.png" alt="Escudo COOTRAVIR" />
            <div class="footer-brand-text">
              <h3 class="footer-title">COOTRAVIR C.T.A.</h3>
              <p class="footer-tagline">Cooperativa de Trabajadores de Vigilancia</p>
            </div>
          </div>
          <p class="footer-desc">Proteger lo suyo es nuestro mayor compromiso.</p>
          <p class="footer-desc">Comprometidos con la seguridad y el bienestar de nuestros clientes.</p>

          <div class="footer-social">
            <span class="mdi mdi-facebook"></span>
            <a
              href="https://www.facebook.com/profile.php?id=100077313499509"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <span class="mdi mdi-instagram"></span>
            
            <a
              href="https://www.instagram.com/cootravir.cta/?hl=es-la"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
        </div>

        <details class="footer-group" open>
          <summary class="footer-group-title">Enlaces rápidos</summary>
          <div class="footer-links">
            <router-link to="/">Inicio</router-link>
            <router-link to="/conocenos">Conócenos</router-link>
            <router-link to="/servicios">Servicios</router-link>
            <router-link to="/contactanos">Contáctanos</router-link>
          </div>
        </details>

        <details class="footer-group" open>
          <summary class="footer-group-title">Servicios</summary>
          <div class="footer-links">
            <router-link to="/servicios/vigilancia-fisica">Vigilancia física</router-link>
            <router-link to="/servicios/vigilancia-electronica">Vigilancia electrónica</router-link>
            <router-link to="/servicios/monitoreo-alarmas">Monitoreo de alarmas</router-link>
            <router-link to="/servicios/cootravir-ph">Cootravir PH</router-link>
          </div>
        </details>

        <details class="footer-group" open>
          <summary class="footer-group-title">Información</summary>
          <div class="footer-links">
            <router-link to="/proteccion-datos">Protección de datos</router-link>
            <router-link to="/solicitar-cotizacion">Solicitar cotización</router-link>
            <router-link to="/trabaja-con-nosotros">Trabaja con nosotros</router-link>
          </div>
        </details>
      </div>

      <!-- BOTTOM -->
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} COOTRAVIR. Todos los derechos reservados.</p>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
