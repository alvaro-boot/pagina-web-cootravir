<template>
  <div class="card">
    <h3 v-if="$slots.title" class="card-title">
      <slot name="title"></slot>
    </h3>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
</script>

