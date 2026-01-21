<template>
  <header class="header">
    <div class="header-container">

      <!-- LOGO + MEGA MENU -->
      <div class="logo-mega-wrapper">

        <!-- Logo -->
        <router-link to="/" class="logo">
          <img src="/logos/escudo.png" alt="Logo Cootravir C.T.A.">
          <span class="logo-text">COOTRAVIR C.T.A.</span>
          <span class="mega-menu-indicator">▼</span>
        </router-link>

        <!-- MEGA MENU (SOLO DESKTOP) -->
        <div class="mega-menu">
          <div class="mega-menu-container">
            <div class="mega-column">
              <h4>Inicio</h4>
              <router-link to="/">Inicio</router-link>
            </div>

            <div class="mega-column mega-column-two-rows">
              <h4>Conócenos</h4>
              <div class="mega-links-wrapper">
                <router-link to="/conocenos/que_es_cootravir">Qué es Cootravir</router-link>
                <router-link to="/conocenos/noticias">Noticias</router-link>
                <router-link to="/conocenos/politicas">Políticas</router-link>
                <router-link to="/conocenos/responsabilidad-social">
                  Responsabilidad social
                </router-link>
                <router-link to="/conocenos/documentos-publicos">
                  Documentos públicos
                </router-link>
              </div>
            </div>

            <div class="mega-column mega-column-two-rows">
              <h4>Servicios</h4>
              <div class="mega-links-wrapper">
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
            </div>

            <div class="mega-column">
              <h4>Talento humano</h4>
              <router-link to="/trabaja-con-nosotros">
                Trabaja con nosotros
              </router-link>
            </div>

            <div class="mega-column">
              <h4>Contacto</h4>
              <router-link to="/solicitar-cotizacion">
                Solicitar cotización
              </router-link>
              <router-link to="/contactanos">
                Contáctanos
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- BOTÓN MENÚ MÓVIL -->
      <button
        class="mobile-menu-toggle"
        :class="{ active: mobileMenuOpen }"
        @click="toggleMobileMenu"
        aria-label="Abrir menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- NAVEGACIÓN (SOLO MÓVIL) -->
      <Navigation
        v-if="isMobile"
        :mobile-menu-open="mobileMenuOpen"
        @close-mobile-menu="closeMobileMenu"
      />
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navigation from './Navigation.vue'

const mobileMenuOpen = ref(false)
const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 1024
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>
