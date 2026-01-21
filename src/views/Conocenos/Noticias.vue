<template>
  <Layout>
    <section class="content-section">
      <div class="container">
        <h1 class="section-title">Noticias de Seguridad</h1>
        <p class="section-subtitle">
          Mantente informado sobre las últimas tendencias y actualizaciones en seguridad
        </p>

        <!-- NOTICIA PRINCIPAL (DENTRO DE CARD) -->
        <Card class="news-featured-card">
          <article class="news-featured">
            <div class="news-featured-image">
              <Carousel :slides="newsSlides" />
            </div>

            <div class="news-featured-content">
              <p class="news-category">RESPONSABILIDAD SOCIAL</p>

              <h2>
                Sembrando Futuro: Nuestro Compromiso con el Medio Ambiente
              </h2>

              <p class="news-excerpt">
                <strong>En COOTRAVIR entendemos que la seguridad también implica proteger nuestro entorno.</strong>
                <strong>
                  Bajo el lema "Tu seguridad es nuestra misión, el medio ambiente nuestra responsabilidad",
                </strong>
                <strong>
                  nuestro equipo participó en una jornada de reforestación activa.
                </strong>
              </p>

              <div class="news-meta">
                <p class="news-date">22 de enero, 2024</p>
              </div>
            </div>
          </article>
        </Card>

        <!-- NOTICIAS SECUNDARIAS -->
        <div class="news-grid">
          <article class="news-item">
            <div class="news-item-content">
              <span class="news-category">VIGILANCIA FÍSICA</span>
              <h3>Capacitación Continua: Base de la Excelencia en Seguridad</h3>
              <p class="news-excerpt">
                Nuestro compromiso con la formación constante de nuestro equipo de seguridad
                garantiza profesionales altamente capacitados y preparados para cualquier situación.
              </p>
              <div class="news-meta">
                <span class="news-date">10 de enero, 2024</span>
              </div>
            </div>

            <div class="news-item-image">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop"
                alt="Vigilancia física profesional"
              />
            </div>
          </article>

          <article class="news-item">
            <div class="news-item-content">
              <span class="news-category">CERTIFICACIONES</span>
              <h3>Reconocimiento Internacional: Certificación BASC Renovada</h3>
              <p class="news-excerpt">
                COOTRAVIR renueva su certificación BASC, reafirmando nuestro compromiso
                con los más altos estándares de seguridad y excelencia operativa.
              </p>
              <div class="news-meta">
                <span class="news-date">5 de enero, 2024</span>
              </div>
            </div>

            <div class="news-item-image">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
                alt="Certificación de seguridad"
              />
            </div>
          </article>

          <article class="news-item">
            <div class="news-item-content">
              <span class="news-category">TENDENCIAS</span>
              <h3>Seguridad Integral: Más que Vigilancia</h3>
              <p class="news-excerpt">
                La seguridad moderna va más allá de la vigilancia tradicional,
                incorporando análisis de riesgo y soluciones personalizadas.
              </p>
              <div class="news-meta">
                <span class="news-date">28 de diciembre, 2023</span>
              </div>
            </div>

            <div class="news-item-image">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
                alt="Seguridad integral"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup>
import { ref } from 'vue'
import Layout from '../../components/Layout/Layout.vue'
import Card from '../../components/UI/Card.vue'
import Carousel from '../../components/UI/Carousel.vue'

const newsSlides = ref([
  {
    image: '/noticias/img1.jpg',
    alt: 'Jornada de reforestación COOTRAVIR'
  },
  {
    image: '/noticias/img2.jpg',
    alt: 'Responsabilidad social empresarial'
  },
  {
    image: '/noticias/img3.jpg',
    alt: 'Compromiso ambiental COOTRAVIR'
  }
])
</script>