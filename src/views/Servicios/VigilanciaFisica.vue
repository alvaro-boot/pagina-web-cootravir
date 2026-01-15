<template>
  <Layout>
    <!-- HERO -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">

          <!-- TEXTO -->
          <div class="hero-text">

            <h1>
              Vigilancia Física<br />
              Profesional 24/7
            </h1>

            <p>
              Desde la Gerencia, Dirección Operativa, Coordinadores de Seguridad,
              Supervisores y Guardas de Seguridad, estamos prestos a atender todos
              los requerimientos de nuestros clientes y usuarios, garantizando el
              cumplimiento cabal de las funciones encomendadas y el mejoramiento
              continuo del servicio de vigilancia privada.
            </p>

            <p>
              Estamos autorizados y aprobados por la Superintendencia de Vigilancia
              y Seguridad Privada, el Ministerio de Tecnologías de la Información y
              las Comunicaciones, y afiliados a la Red de Apoyo y Frente Empresarial
              de la Policía Nacional.
            </p>

            <p>
              Todo nuestro personal se encuentra debidamente uniformado y dotado
              con los elementos de seguridad, equipos de intendencia y tecnología
              necesarios para la prestación de un servicio óptimo y confiable.
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
              src="/img-carrucel/vigilancia_fisica_20251112.jpg"
              alt="Servicio de vigilancia física profesional"
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
