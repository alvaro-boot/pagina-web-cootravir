<template>
  <button
    :type="type"
    :class="['btn', `btn-${variant}`, { 'btn-disabled': disabled }]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'submit', 'reset'].includes(value)
  }
})

defineEmits(['click'])
</script>

<style scoped>
.btn-disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}

.btn-disabled:hover {
  transform: none !important;
  box-shadow: var(--shadow-sm) !important;
}
</style>

