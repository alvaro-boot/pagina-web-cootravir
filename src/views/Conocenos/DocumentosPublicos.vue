<template>
  <Layout>
    <section class="content-section">
      <div class="container">
        <!-- 2025 -->
        <h2 class="section-title">Documentos Públicos 2025</h2>
        <div class="content-grid">
          <Card
            v-for="doc in documentos_publicos2025"
            :key="doc.url"
          >
            <template #title>{{ doc.titulo }}</template>
            <p>{{ doc.descripcion }}</p>
            <a
              :href="doc.url"
              target="_blank"
              class="btn btn-outline mt-md"
            >
              Descargar
            </a>
          </Card>
        </div>

        <!-- 2024 -->
        <h2 class="section-title mt-2xl">Documentos Públicos 2024</h2>
        <div class="content-grid">
          <Card
            v-for="doc in documentos_publicos2024"
            :key="doc.url"
          >
            <template #title>{{ doc.titulo }}</template>
            <p>{{ doc.descripcion }}</p>
            <a
              :href="doc.url"
              target="_blank"
              class="btn btn-outline mt-md"
            >
              Descargar
            </a>
          </Card>
        </div>

        <div class="text-center mt-2xl">
          <p>Para solicitar documentos adicionales o más información, por favor contáctanos.</p>
          <router-link to="/contactanos" class="btn btn-primary mt-lg">
            Contáctanos
          </router-link>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup>
import Layout from '../../components/Layout/Layout.vue'
import Card from '../../components/UI/Card.vue'

const documentos_publicos2025 = [
  {
    titulo: 'Cámara de Comercio',
    descripcion: 'Junio de 2025',
    url: '/documentos_publicos/2025/camara_comercio_2025.pdf'
  },
  {
    titulo: 'Certificación de Antecedentes de Directivos',
    descripcion: 'Junio de 2025',
    url: '/documentos_publicos/2025/antecedentes_directivos_2025.pdf'
  },
  {
    titulo: 'Certificación de Cumplimiento',
    descripcion: 'Junio de 2025',
    url: '/documentos_publicos/2025/cumplimiento_2025.pdf'
  },
  {
    titulo: 'Certificación de Remuneración Anual',
    descripcion: 'Junio de 2025',
    url: '/documentos_publicos/2025/remuneracion_anual_2025.pdf'
  },
  {
    titulo: 'Certificación Fundadores',
    descripcion: 'Junio de 2025',
    url: '/documentos_publicos/2025/fundadores_2025.pdf'
  },
  {
    titulo: 'Estados Financieros 2024',
    descripcion: 'Febrero de 2025',
    url: '/documentos_publicos/2025/estado_financieros_2025.pdf'
  },
  {
    titulo: 'Informe de Gerencia',
    descripcion: 'Febrero de 2025',
    url: '/documentos_publicos/2025/informe_gerencia_2025.pdf'
  },
  {
    titulo: 'Memoria Económica',
    descripcion: '2025',
    url: '/documentos_publicos/2025/memoria_economica_2025.pdf'
  },
  {
    titulo: 'Septuagésima Séptima Asamblea General Ordinaria',
    descripcion: 'Abril de 2025',
    url: '/documentos_publicos/2025/septuagesima_septim_asamblea_2025.pdf'
  }
]

const documentos_publicos2024 = [
  {
    titulo: 'Cámara de Comercio',
    descripcion: 'Mayo de 2024',
    url: '/documentos_publicos/2024/5. CAMARA DE COMERCIO 17 MAYO 2024 (1).pdf'
  },
  {
    titulo: 'Certificación Antecedentes de Directivos',
    descripcion: '2024',
    url: '/documentos_publicos/2024/CERTIFICACION DE ANTECEDENTES DE DIRECTIVOS 2024.pdf'
  },
  {
    titulo: 'Certificación de Cumplimiento',
    descripcion: '2024',
    url: '/documentos_publicos/2024/CERTIFICACION DE CUMPLIMIENTO NUM 13 PAR 2 ART 364-5.pdf'
  },
  {
    titulo: 'Certificación de Remuneración Anual',
    descripcion: 'Año 2023',
    url: '/documentos_publicos/2024/CERTIFICACION DE REMUNERACION ANUAL 2023.pdf'
  },
  {
    titulo: 'Certificación Fundadores',
    descripcion: '2024',
    url: '/documentos_publicos/2024/CERTIFICACION FUNDADORES 2024.pdf'
  },
  {
    titulo: 'Estados Financieros',
    descripcion: 'Año 2023',
    url: '/documentos_publicos/2024/ESTADOS FINANCIEROS 2023 CON REVELACIONES Y DICTAMEN.pdf'
  },
  {
    titulo: 'Informe de Gerencia',
    descripcion: 'Año 2023',
    url: '/documentos_publicos/2024/INFORME DE GERENCIA AÑO 2023.pdf'
  },
  {
    titulo: 'Memoria Económica',
    descripcion: 'Año 2023',
    url: '/documentos_publicos/2024/MEMORIA ECONOMICA 2023  DEFINITIVA.pdf'
  },
  {
    titulo: 'Septuagésima Sexta Asamblea General Ordinaria',
    descripcion: 'Marzo de 2024',
    url: '/documentos_publicos/2024/SEPTUGESIMA SEXTA ASAMBLEA GENERAL ORDINARIA - MARZO 2024 COMPRIMIDO.pdf'
  }
]
</script>
