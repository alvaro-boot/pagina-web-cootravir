<template>
  <Layout>
    <!-- HERO -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">

          <!-- TEXTO -->
          <div class="hero-text">


            <h1>
              Monitoreo de Alarmas<br />
              24/7
            </h1>

            <p>
              COOTRAVIR CTA cuenta con un excelente grupo de supervisores,
              estratégicamente zonificados, lo que permite una reacción rápida y
              eficiente ante cualquier evento de alarma presentado.
            </p>

            <p>
              Contamos con el servicio de <strong>RADAR</strong>, el cual verifica
              de manera constante la disponibilidad y ubicación de las unidades en
              cualquier momento, facilitando la atención oportuna, la verificación
              de eventos y el mejoramiento continuo del servicio.
            </p>

            <p>
              Nuestro centro de monitoreo opera las 24 horas del día, garantizando
              una comunicación efectiva y la activación inmediata de los
              protocolos de seguridad necesarios.
            </p>

            <div class="hero-actions">
              <router-link
                to="/solicitar-cotizacion"
                class="btn btn-primary"
              >
                Solicitar Cotización
              </router-link>
            </div>
          </div>

          <!-- IMAGEN -->
          <div class="hero-image hero-image-vigilancia">
            <img
              src="/img-carrucel/monitoreohome.jpg"
              alt="Centro de monitoreo de alarmas 24/7"
            />
          </div>

        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup>
import Layout from '../../components/Layout/Layout.vue'
</script>
