<template>
  <Layout>
    <section class="content-section">
      <div class="container">
        <h1 class="text-center">Nuestros Servicios</h1>
        <p class="text-center" style="max-width: 800px; margin: 0 auto var(--spacing-2xl);">
          COOTRAVIR ofrece soluciones integrales de seguridad adaptadas a las necesidades de cada cliente.
        </p>
        
        <div class="content-grid">
          <Card>
            <template #title>Vigilancia Física</template>
            <p>Servicios de seguridad personalizada con profesionales altamente capacitados y dedicados a proteger sus instalaciones y activos.</p>
            <router-link to="/servicios/vigilancia-fisica" class="btn btn-primary mt-lg">Más información</router-link>
          </Card>
          
          <Card>
            <template #title>Vigilancia Electrónica</template>
            <p>Tecnología de vanguardia para monitoreo y protección de sus instalaciones mediante sistemas de video vigilancia avanzados.</p>
            <router-link to="/servicios/vigilancia-electronica" class="btn btn-primary mt-lg">Más información</router-link>
          </Card>
          
          <Card>
            <template #title>Monitoreo de Alarmas</template>
            <p>Sistema de alarmas con respuesta inmediata las 24 horas del día, garantizando la seguridad de su negocio o residencia.</p>
            <router-link to="/servicios/monitoreo-alarmas" class="btn btn-primary mt-lg">Más información</router-link>
          </Card>
          
          <Card>
            <template #title>Cootravir PH</template>
            <p>Servicios especializados para propiedades horizontales y comunidades, con atención personalizada y soluciones adaptadas.</p>
            <router-link to="/servicios/cootravir-ph" class="btn btn-primary mt-lg">Más información</router-link>
          </Card>
        </div>
        
        <div class="text-center mt-2xl">
          <router-link to="/solicitar-cotizacion" class="btn btn-primary">Solicitar Cotización</router-link>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup>
import Layout from '../../components/Layout/Layout.vue'
import Card from '../../components/UI/Card.vue'
</script>

