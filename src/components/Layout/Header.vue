<template>
  <header class="header">
    <div class="header-container">

      <!-- Logo -->
      <div class="logo"><img src="/logos/logo1.png" alt=""></div>

      <!-- Botón menú móvil -->
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

      <!-- Navegación -->
      <Navigation
        :mobile-menu-open="mobileMenuOpen"
        @close-mobile-menu="closeMobileMenu"
      />
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import Navigation from './Navigation.vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>
