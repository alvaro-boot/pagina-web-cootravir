import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './', // Rutas relativas para que funcione al abrir index.html directamente desde el explorador
  build: {
    // Configuración para hosting estático
    outDir: 'dist',
    assetsDir: 'assets',
    // Asegurar que todas las dependencias se empaqueten
    commonjsOptions: {
      include: [/node_modules/],
    },
    rollupOptions: {
      output: {
        // Formato más compatible para hosting estático
        manualChunks: undefined,
        // Asegurar que los chunks se generen correctamente
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      }
    },
    // Asegurar que los assets se copien correctamente
    copyPublicDir: true,
    // Minificar para producción
    minify: 'esbuild',
    // Asegurar que el build sea compatible
    target: 'es2015',
  },
  // Configuración del servidor de desarrollo (no afecta el build)
  server: {
    port: 3000,
  },
  // Optimización de dependencias
  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },
})