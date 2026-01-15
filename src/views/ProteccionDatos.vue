<template>
  <Layout>
    <section class="content-section">
      <div class="container">
        <h1>Protección de Datos</h1>
        <p>COOTRAVIR está comprometida con la protección de los datos personales de nuestros clientes y usuarios.</p>
        
        <div class="content-grid">
          <Card>
            <template #title>Política de Privacidad</template>
            <p>En COOTRAVIR respetamos su privacidad y nos comprometemos a proteger sus datos personales de acuerdo con la normativa vigente de protección de datos personales.</p>
          </Card>
          
          <Card>
            <template #title>Uso de Información</template>
            <p>La información personal que recopilamos se utiliza exclusivamente para brindar nuestros servicios, mejorar la experiencia del usuario y cumplir con obligaciones legales.</p>
          </Card>
          
          <Card>
            <template #title>Seguridad de Datos</template>
            <p>Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra acceso no autorizado, pérdida o destrucción.</p>
          </Card>
          
          <Card>
            <template #title>Derechos del Titular</template>
            <p>Usted tiene derecho a conocer, actualizar, rectificar y suprimir sus datos personales, así como a revocar su autorización y presentar quejas ante la autoridad competente.</p>
          </Card>
          
          <Card>
            <template #title>Compartir Información</template>
            <p>No compartimos su información personal con terceros, excepto cuando sea necesario para la prestación del servicio o cuando la ley lo requiera.</p>
          </Card>
          
          <Card>
            <template #title>Actualizaciones</template>
            <p>Esta política puede ser actualizada periódicamente. Le notificaremos sobre cualquier cambio significativo mediante nuestro sitio web.</p>
          </Card>
        </div>
        
        <div class="text-center mt-2xl">
          <p>Para ejercer sus derechos sobre sus datos personales, por favor contáctenos.</p>
          <router-link to="/contactanos" class="btn btn-primary mt-lg">Contáctanos</router-link>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup>
import Layout from '../components/Layout/Layout.vue'
import Card from '../components/UI/Card.vue'
</script>

