<template>
  <Layout>
    <!-- HERO -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">

          <!-- TEXTO -->
          <div class="hero-text">


            <h1>
              Vigilancia Electrónica<br />
              y Control Inteligente
            </h1>

            <p>
              COOTRAVIR CTA se encuentra a la vanguardia en tecnología de seguridad,
              ofreciendo soluciones avanzadas en sistemas de control de ingreso,
              automatización vehicular y peatonal, y monitoreo electrónico de alta
              precisión.
            </p>

            <p>
              Implementamos sistemas de cámaras de seguridad, cámaras con detección
              de intrusión, cámaras PTZ, cámaras y software con lectura de placas,
              software para el control de visitantes y correspondencia, así como
              sistemas de control perimetral.
            </p>

            <p>
              Todas nuestras soluciones están diseñadas para integrarse de manera
              eficiente, brindando monitoreo continuo, respuesta oportuna y un alto
              nivel de confiabilidad en la protección de sus instalaciones.
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
              alt="Sistemas de vigilancia electrónica y control de acceso"
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
