<template>
  <Layout>
    <section class="hero">
      <div class="container">

        <!-- BLOQUE SUPERIOR (TEXTO + IMAGEN) -->
        <div class="hero-content">

          <!-- TEXTO -->
          <div class="hero-text">

            <h1>¿Qué es Cootravir PH?</h1>

            <p>
              <strong>Cootravir PH</strong> es una solución innovadora diseñada para
              ofrecer agilidad, fiabilidad, control y mejoras significativas en los
              procesos administrativos de conjuntos residenciales, edificios y
              otras Propiedades Horizontales.
            </p>

            <p>
              Desarrollado por Cootravir CTA, Cootravir PH está construido utilizando
              los más altos estándares web y cuenta con el respaldo y asesoría de
              destacados profesionales en diversas áreas, permitiendo ofrecer un
              servicio de calidad adaptado a cada comunidad.
            </p>
          </div>

          <!-- IMAGEN -->
          <div class="hero-image hero-image-ph">
            <img
              src="/servicios/cootravirph.png"
              alt="Plataforma Cootravir PH"
            />
          </div>

        </div>

        <!-- CARDS (DEBAJO EN 3 COLUMNAS) -->
        <div class="content-grid mt-2xl">

          <Card>
            <template #title>Beneficios de Cootravir PH</template>
            <p><strong>Agilidad:</strong> Simplificamos y aceleramos los procesos administrativos.</p>
            <p><strong>Fiabilidad:</strong> Seguridad y precisión en la gestión de la información.</p>
            <p><strong>Control:</strong> Herramientas para una administración transparente.</p>
            <p><strong>Mejoras continuas:</strong> Innovación constante basada en feedback.</p>
          </Card>

          <Card>
            <template #title>Nuestro compromiso</template>
            <p>
              Transformar la administración de Propiedades Horizontales mediante
              tecnología avanzada y un enfoque centrado en el cliente.
            </p>
            <p>
              Trabajamos con aliados estratégicos para ofrecer soluciones que
              realmente marquen la diferencia.
            </p>
          </Card>

          <Card>
            <template #title>InHouse Development</template>
            <p><strong>Desarrollado por:</strong> Cootravir CTA</p>
            <p><strong>Año de creación:</strong> 2025</p>
            <p><strong>Contacto:</strong> +57 316 017 1437</p>
            <p><strong>Email:</strong> desarrollador@cootravir.com.co</p>
          </Card>

        </div>

<!-- DESCARGA -->
<div class="mt-2xl">
  <h3 class="text-center">Cootravir PH</h3>
  <p class="text-center">
    Uso exclusivo para Propiedades Horizontales
  </p>

  <div class="content-grid mt-xl">

    <Card>
      <template #title>Android</template>
      <p>
        Descargue la aplicación oficial de Cootravir PH desde Google Play
        para dispositivos Android.
      </p>
      <a
        href="https://play.google.com/store/apps/details?id=app.cootravir.phv2"
        target="_blank"
        rel="noopener"
        class="btn btn-primary"
      >
        Descargar en Google Play
      </a>
    </Card>

    <Card>
      <template #title>iOS</template>
      <p>
        Descargue la aplicación oficial de Cootravir PH desde la App Store
        para dispositivos Apple.
      </p>
      <a
        href="https://apps.apple.com/us/app/cootravir-ph-v2/id6746952162"
        target="_blank"
        rel="noopener"
        class="btn btn-primary"
      >
        Descargar en App Store
      </a>
    </Card>

    <Card>
      <template #title>Aplicación Web</template>
      <p>
        Acceda a Cootravir PH directamente desde su navegador web, sin
        necesidad de instalación.
      </p>
      <a
        href="https://ph.cootravir.app/"
        target="_blank"
        rel="noopener"
        class="btn btn-primary"
      >
        Ir a la aplicación web
      </a>
    </Card>

  </div>
</div>


      </div>
    </section>
  </Layout>
</template>

<script setup>
import Layout from '../../components/Layout/Layout.vue'
import Card from '../../components/UI/Card.vue'
</script>
