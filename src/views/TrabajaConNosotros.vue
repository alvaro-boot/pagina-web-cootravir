<template>
  <Layout>
    <section class="content-section">
      <div class="container">

        <!-- HERO -->
        <div class="hero-content">

          <!-- TEXTO -->
          <div class="hero-text">
            <h1>Trabaje con Nosotros</h1>
            <p>
              En <strong>COOTRAVIR C.T.A.</strong> buscamos personas comprometidas,
              responsables y con vocación de servicio que deseen formar parte de
              una organización sólida en el sector de la seguridad privada.
            </p>

            <p>
              Si desea hacer parte de nuestro equipo, puede enviar su hoja de
              vida a través de los siguientes canales.
            </p>
          </div>

          <!-- IMAGEN -->
          <div class="hero-image">
            <img
              src="/img-carrucel/trabaje_con_nosotros_2025.jpeg"
              alt="Equipo COOTRAVIR CTA"
              style="width: 100%; border-radius: var(--border-radius-lg);"
            />
          </div>

        </div>

        <!-- CARDS -->
        <div class="content-grid mt-2xl">

          <Card>
            <template #title>Envío telefónico</template>
            <p>
              Puede comunicarse directamente con el área de Recursos Humanos
              llamando al siguiente número:
            </p>
            <p><strong>📞 318 504 37 98</strong></p>
          </Card>

          <Card>
            <template #title>Correo electrónico</template>
            <p>
              Envíe su hoja de vida al correo electrónico oficial de incorporación:
            </p>
            <p><strong>📧 incorporacion@cootravir.com.co</strong></p>
          </Card>

          <Card>
            <template #title>Proceso de selección</template>
            <p>
              Nuestro proceso incluye revisión de perfil, entrevistas y
              verificación de antecedentes, garantizando la calidad de nuestro
              personal.
            </p>
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
