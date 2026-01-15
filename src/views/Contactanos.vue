<template>
  <Layout>
    <section class="content-section">
      <div class="container">

        <!-- HERO -->
        <div class="hero-content">

          <!-- TEXTO -->
          <div class="hero-text">
            <h1>Contáctanos</h1>
            <p>
              Para mayor información, nuestros canales de atención están
              disponibles para brindarte soporte oportuno y especializado.
            </p>
            <p>
              Nuestro equipo está preparado para atender tus solicitudes,
              inquietudes y requerimientos.
            </p>
          </div>

          <!-- MAPA -->

          <div class="hero-image hero-map">
            <iframe
  src="https://www.google.com/maps?q=COOTRAVIR%20CTA%204.807724981922381,-75.68568957670178&output=embed"
  width="100%"
  height="350"
  style="border:0; border-radius: var(--border-radius-lg);"
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
          </div>


        </div>

        <!-- CANALES -->
        <div class="content-grid mt-2xl">

          <Card>
            <template #title>Servicio al Cliente</template>
            <p>📞 (606) 335 58 08 Ext. 1125</p>
            <p>📱 (57) 317 212 41 39</p>
            <p>📧 servicioalcliente@cootravir.com.co</p>
          </Card>

          <Card>
            <template #title>Gestión Humana</template>
            <p>📞 (606) 335 58 08 Ext. 1118</p>
            <p>📧 directorgh@cootravir.com.co</p>
          </Card>

          <Card>
            <template #title>Central de Monitoreo</template>
            <p>📞 (606) 335 58 08 Ext. 1111</p>
            <p>📱 (57) 312 767 07 15</p>
            <p>📧 monitoreo@cootravir.com.co</p>
          </Card>

          <Card>
            <template #title>Protección de Datos Personales</template>
            <p>📞 (606) 335 58 08</p>
            <p>📧 protecciondedatos@cootravir.com.co</p>
          </Card>

          <Card>
            <template #title>Fondos COOTRAVIR C.T.A</template>
            <p>📧 foneducacion@cootravir.com.co</p>
            <p>📧 fonsolidaridad@cootravir.com.co</p>
            <p>📧 fonbienestar@cootravir.com.co</p>
          </Card>

          <Card>
            <template #title>Línea Ética / SARLAFT 2.0</template>
            <p>📞 (317) 467 3237</p>
            <p>📧 oficialdecumplimiento@cootravir.com.co</p>
          </Card>

        </div>

      </div>
    </section>
  </Layout>
</template>

<script setup>
import Layout from '../components/Layout/Layout.vue'
import Card from '../components/UI/Card.vue'
</script>
