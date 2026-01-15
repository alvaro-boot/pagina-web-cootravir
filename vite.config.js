import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './', // Rutas relativas para que funcione al abrir index.html directamente
  build: {
    // Configuración para hosting estático
    outDir: 'dist',
    assetsDir: 'assets',
    // Generar archivos más compatibles
    rollupOptions: {
      output: {
        // Formato más compatible para hosting estático
        manualChunks: undefined,
      }
    },
    // Asegurar que los assets se copien correctamente
    copyPublicDir: true,
  },
  // Configuración del servidor de desarrollo (no afecta el build)
  server: {
    port: 3000,
  }
})

