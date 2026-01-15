<template>
  <Layout>
    <section class="content-section">
      <div class="container">

        <h1 class="text-center">Solicitar Cotización</h1>
        <p class="text-center">
          En COOTRAVIR CTA ofrecemos soluciones de seguridad adaptadas a sus
          necesidades. Nuestro equipo está listo para asesorarlo de manera
          personalizada.
        </p>

        <!-- GRID INFORMATIVO -->
        <div class="content-grid mt-2xl">

          <Card>
            <template #title>¿Cómo cotizar?</template>
            <p>
              Puede solicitar una cotización comunicándose directamente con
              nuestro equipo comercial. Analizamos sus necesidades y le
              ofrecemos la mejor solución en seguridad.
            </p>
          </Card>

          <Card>
            <template #title>Canales de contacto</template>
            <p><strong>Teléfono:</strong> (606) 335 58 08 Ext. 1125</p>
            <p><strong>Celular:</strong> +57 317 212 41 39</p>
            <p><strong>Email:</strong> servicioalcliente@cootravir.com.co</p>
          </Card>

          <Card>
            <template #title>Atención personalizada</template>
            <p>
              Nuestro equipo de asesores lo acompañará en todo el proceso,
              brindándole una atención rápida, clara y confiable.
            </p>
          </Card>

        </div>

        <!-- WHATSAPP CTA -->
        <div class="text-center mt-2xl">
          <a
            href="https://wa.me/573172124139"
            target="_blank"
            rel="noopener"
            class="btn btn-primary btn-lg"
          >
            💬 Cotizar por WhatsApp
          </a>
        </div>

      </div>
    </section>
  </Layout>
</template>

<script setup>
import Layout from '../components/Layout/Layout.vue'
import Card from '../components/UI/Card.vue'
</script>
