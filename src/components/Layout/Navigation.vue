<template>
  <nav class="nav" :class="{ open: mobileMenuOpen }">
    <ul class="nav-list">
      <li class="nav-item">
        <router-link to="/" class="nav-link" @click="closeMobileMenu">Inicio</router-link>
      </li>
      
      <li class="nav-item">
        <Dropdown
          label="Conócenos"
          :items="conocenosItems"
          @close-mobile-menu="closeMobileMenu"
        />
      </li>
      
      <li class="nav-item">
        <Dropdown
          label="Servicios"
          :items="serviciosItems"
          @close-mobile-menu="closeMobileMenu"
        />
      </li>
      
      <li class="nav-item">
        <router-link to="/proteccion-datos" class="nav-link" @click="closeMobileMenu">Protección de datos</router-link>
      </li>
      
      <li class="nav-item">
        <router-link to="/solicitar-cotizacion" class="nav-link" @click="closeMobileMenu">Solicitar cotización</router-link>
      </li>
      
      <li class="nav-item">
        <router-link to="/trabaja-con-nosotros" class="nav-link" @click="closeMobileMenu">Trabaja con nosotros</router-link>
      </li>
      
      <li class="nav-item">
        <router-link to="/contactanos" class="nav-link" @click="closeMobileMenu">Contáctanos</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import Dropdown from '../UI/Dropdown.vue'

const conocenosItems = [
  { label: 'Qué es Cootravir C.T.A.', path: '/conocenos/que_es_cootravir'},
  { label: 'Noticias', path: '/conocenos/noticias' },
  { label: 'Políticas', path: '/conocenos/politicas' },
  { label: 'Políticas de responsabilidad social', path: '/conocenos/responsabilidad-social' },
  { label: 'Documentos públicos', path: '/conocenos/documentos-publicos' }
]

const serviciosItems = [
  { label: 'Vigilancia física', path: '/servicios/vigilancia-fisica' },
  { label: 'Vigilancia electrónica', path: '/servicios/vigilancia-electronica' },
  { label: 'Monitoreo de alarmas', path: '/servicios/monitoreo-alarmas' },
  { label: 'Cootravir PH', path: '/servicios/cootravir-ph' }
]

const props = defineProps({
  mobileMenuOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close-mobile-menu'])

const closeMobileMenu = () => {
  emit('close-mobile-menu')
}
</script>

