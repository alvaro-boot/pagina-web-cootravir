<template>
  <Layout>
    <section class="content-section">
      <div class="container">
        <h1 class="text-center">Conócenos</h1>
        <p class="text-center" style="max-width: 800px; margin: 0 auto var(--spacing-2xl);">
          COOTRAVIR es una organización comprometida con brindar servicios de seguridad de excelencia, 
          respaldados por años de experiencia y un equipo altamente capacitado.
        </p>
        
        <div class="content-grid">
          <Card>
            <template #title>Noticias</template>
            <p>Mantente informado sobre las últimas noticias y actualizaciones de COOTRAVIR.</p>
            <router-link to="/conocenos/noticias" class="btn btn-primary mt-lg">Ver noticias</router-link>
          </Card>
          
          <Card>
            <template #title>Políticas</template>
            <p>Conoce nuestras políticas internas y lineamientos organizacionales.</p>
            <router-link to="/conocenos/politicas" class="btn btn-primary mt-lg">Ver políticas</router-link>
          </Card>
          
          <Card>
            <template #title>Responsabilidad Social</template>
            <p>Nuestro compromiso con la comunidad y el desarrollo social.</p>
            <router-link to="/conocenos/responsabilidad-social" class="btn btn-primary mt-lg">Más información</router-link>
          </Card>
          
          <Card>
            <template #title>Documentos Públicos</template>
            <p>Accede a documentos públicos y transparencia de la organización.</p>
            <router-link to="/conocenos/documentos-publicos" class="btn btn-primary mt-lg">Ver documentos</router-link>
          </Card>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup>
import Layout from '../../components/Layout/Layout.vue'
import Card from '../../components/UI/Card.vue'
</script>

