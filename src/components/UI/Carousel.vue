<template>
  <div class="carousel-container">
    <div class="carousel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="carousel-slide"
      >
        <img :src="slide.image" :alt="slide.alt" />
        <div v-if="slide.badge" class="carousel-badge">
          <span class="badge-icon">🛡️</span>
          <div class="badge-content">
            <p class="badge-title">{{ slide.badge.title }}</p>
            <p v-if="slide.badge.subtitle" class="badge-subtitle">{{ slide.badge.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <button class="carousel-button carousel-button-prev" @click="previousSlide" aria-label="Anterior">
      <span>‹</span>
    </button>
    <button class="carousel-button carousel-button-next" @click="nextSlide" aria-label="Siguiente">
      <span>›</span>
    </button>
    
    <div class="carousel-indicators">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        class="carousel-indicator"
        :class="{ active: currentIndex === index }"
        @click="goToSlide(index)"
        :aria-label="`Ir a diapositiva ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  slides: {
    type: Array,
    required: true
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 5000
  }
})

const currentIndex = ref(0)
let autoplayInterval = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.slides.length
}

const previousSlide = () => {
  currentIndex.value = currentIndex.value === 0 ? props.slides.length - 1 : currentIndex.value - 1
}

const goToSlide = (index) => {
  currentIndex.value = index
}

const startAutoplay = () => {
  if (props.autoplay && props.slides.length > 1) {
    autoplayInterval = setInterval(() => {
      nextSlide()
    }, props.interval)
  }
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-xl);
  overflow: hidden;
}

.carousel {
  display: flex;
  transition: transform var(--transition-slow);
  height: 100%;
}

.carousel-slide {
  min-width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.carousel-badge {
  position: absolute;
  bottom: var(--spacing-lg);
  right: var(--spacing-lg);
  background-color: rgba(14, 36, 85, 0.9);
  backdrop-filter: blur(10px);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  max-width: 300px;
  color: var(--white);
}

.badge-icon {
  font-size: var(--font-size-2xl);
  flex-shrink: 0;
}

.badge-content {
  flex: 1;
}

.badge-title {
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-sm);
  margin: 0;
  color: var(--white);
}

.badge-subtitle {
  font-size: var(--font-size-xs);
  margin: var(--spacing-xs) 0 0 0;
  color: var(--gray-200);
  opacity: 0.9;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: var(--cootravir-blue);
  transition: all var(--transition-base);
  z-index: 10;
  box-shadow: var(--shadow-md);
}

.carousel-button:hover {
  background-color: var(--white);
  transform: translateY(-50%) scale(1.1);
  box-shadow: var(--shadow-lg);
}

.carousel-button-prev {
  left: var(--spacing-md);
}

.carousel-button-next {
  right: var(--spacing-md);
}

.carousel-indicators {
  position: absolute;
  bottom: var(--spacing-md);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: var(--spacing-xs);
  z-index: 10;
}

.carousel-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all var(--transition-base);
  padding: 0;
}

.carousel-indicator.active {
  background-color: var(--white);
  width: 24px;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .carousel-badge {
    bottom: var(--spacing-md);
    right: var(--spacing-md);
    padding: var(--spacing-sm) var(--spacing-md);
    max-width: 250px;
  }
  
  .badge-title {
    font-size: var(--font-size-xs);
  }
  
  .badge-subtitle {
    font-size: 0.65rem;
  }
  
  .carousel-button {
    width: 32px;
    height: 32px;
    font-size: 20px;
  }
}
</style>

