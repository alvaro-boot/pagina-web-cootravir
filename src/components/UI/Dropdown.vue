<template>
  <div class="dropdown" :class="{ open: isOpen }" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <button class="nav-link" @click="toggleDropdown">
      {{ label }}
      <span>▼</span>
    </button>
    <ul class="dropdown-menu">
      <li v-for="item in items" :key="item.path">
        <router-link :to="item.path" class="dropdown-item" @click="handleItemClick">
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  }
})

const isOpen = ref(false)

const toggleDropdown = () => {
  // En móvil, siempre toggle el dropdown
  if (window.innerWidth < 1025) {
    isOpen.value = !isOpen.value
  } else {
    // En desktop, el hover maneja la apertura
    isOpen.value = !isOpen.value
  }
}

const closeDropdown = () => {
  isOpen.value = false
}

const handleMouseEnter = () => {
  // Solo en desktop (>= 1025px)
  if (window.innerWidth >= 1025) {
    isOpen.value = true
  }
}

const handleMouseLeave = () => {
  // Solo en desktop (>= 1025px)
  if (window.innerWidth >= 1025) {
    isOpen.value = false
  }
}

const emit = defineEmits(['close-mobile-menu'])

const handleItemClick = () => {
  closeDropdown()
  emit('close-mobile-menu')
}
</script>

<style scoped>
.dropdown span {
  font-size: 0.7rem;
  margin-left: var(--spacing-xs);
  transition: transform var(--transition-base);
}

.dropdown.open span {
  transform: rotate(180deg);
}
</style>

