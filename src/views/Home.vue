<template>
  <Layout>
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <div class="hero-badge">
              <span class="badge-icon">🛡️</span>
              <span>Más de 50 años protegiendo lo que importa</span>
            </div>
            
            <h1>Proteger lo suyo es nuestro mayor compromiso</h1>
            
            <p>Somos una cooperativa de vigilancia y seguridad privada con amplia experiencia en proteger empresas, hogares y personas en todo el Eje Cafetero colombiano.</p>
            
            <ul class="hero-features">
              <li>
                <span class="check-icon">✓</span>
                <span>Vigilancia física 24/7</span>
              </li>
              <li>
                <span class="check-icon">✓</span>
                <span>Monitoreo electrónico avanzado</span>
              </li>
              <li>
                <span class="check-icon">✓</span>
                <span>Certificación BASC</span>
              </li>
            </ul>
            
            <div class="hero-actions">
              <router-link to="/solicitar-cotizacion" class="btn btn-primary">
                Solicitar Cotización →
              </router-link>
              <router-link to="/servicios" class="btn btn-outline-white">
                Conocer Servicios
              </router-link>
            </div>
          </div>
          
          <div class="hero-image">
            <Carousel :slides="heroSlides" />
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="content-section-title">
          <h2>Nuestros Servicios</h2>
          <p>Soluciones de seguridad adaptadas a sus necesidades</p>
        </div>
        
        <div class="grid-lineamientos1">
          <Card>
            <span class="mdi mdi-cctv"></span>
            <H4>Vigilancia Física</H4>
            <p>Servicios de seguridad personalizada con profesionales altamente capacitados.</p>
          </Card>
          
          <Card>
            <span class="mdi mdi-security"></span>
            <H4>Control de Acceso</H4>
            <p>Control de acceso a sus instalaciones con tecnología de vanguardia.</p>
          </Card>
          
          <Card>
            <span class="mdi mdi-television-box"></span>
            <H4>Circuito Cerrado de Televisión</H4>
            <p>Monitoreo de instalaciones con sistemas de CCTV y cámaras de seguridad.</p>
            
          </Card>
          
          <Card>
            <span class="mdi mdi-alarm-light"></span>
            <H4>Detección y Alarma</H4>
            <p>Detección y alarma de intrusos con sistemas de seguridad avanzados.</p>

          </Card>
        </div>
      </div>
    </section>

    <section class="content-section" style="background-color: var(--gray-50);">
      <div class="container">
        <div class="content-section-title">
          <h2>Sobre COOTRAVIR</h2>
          <p>Una organización comprometida con la excelencia</p>
        </div>
        
        <div class="content-grid">
          <Card>
            <template #title>Misión</template>
            <p>Proporcionar servicios de seguridad de alta calidad, contribuyendo al bienestar y protección de nuestros clientes.</p>
          </Card>
          
          <Card>
            <template #title>Visión</template>
            <p>Ser reconocidos como líderes en el sector de seguridad, manteniendo los más altos estándares profesionales.</p>
          </Card>
          
          <Card>
            <template #title>Valores</template>
            <p>Compromiso, integridad, profesionalismo y responsabilidad social son los pilares de nuestra organización.</p>
          </Card>
        </div>
        
        <div class="text-center mt-2xl">
          <router-link to="/conocenos" class="btn btn-primary">Conócenos más</router-link>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="content-section-title">
          <h2>Algunos de Nuestros Clientes</h2>
          <p>Algunos de nuestros clientes que confían en nosotros</p>

          <div class="client-grid">
            <Card class="card-client">
              <img src="/clientes/cliente1.jpg" alt="ASUL">

            </Card>

            <Card class="card-client">
              <img src="/clientes/cliente2.jpg" alt="COOPLAROSA">
            </Card>

            <Card class="card-client">
              <img src="/clientes/cliente3.png" alt="FRACTURAS Y FRACTURAS">
            </Card>

            <Card class="card-client">
              <img src="/clientes/cliente4.jpg" alt="GERENCIAR">
            </Card>

            <Card class="card-client">
              <img src="/clientes/cliente5.png" alt="KOSTA AZUL">
            </Card>
          
            <Card class="card-client">
              <img src="/clientes/cliente6.jpg" alt="NUCLEO">
            </Card>
          
            <Card class="card-client">
              <img src="/clientes/cliente7.jpg" alt="PLAZA DEL SOL">
            </Card>
          
            <Card class="card-client">
              <img src="/clientes/cliente8.png" alt="UNICENTRO">
            </Card>
          </div>
        </div>
      </div>

    </section>

    <section class="content-section certifications-section">
  <div class="container">

    <div class="content-section-title">
          <h2>CERTIFICACIONES</h2>
          <p>Calidad y Servicio</p>
        </div>
    <div class="certifications-grid">

      <!-- BASC -->
      <div class="certification-item">
        <h3 class="certification-title">
          Business Alliance for Secure Commerce
        </h3>
        <img
          src="/certificaciones/basc.jpg"
          alt="Certificación BASC"
          class="certification-logo"
        />
      </div>

      <!-- Bureau Veritas -->
      <div class="certification-item">
        <h3 class="certification-title">
          Bureau Veritas
        </h3>
        <img
          src="/certificaciones/bureau_veritas_2.jpg"
          alt="Certificación Bureau Veritas"
          class="certification-logo"
        />
      </div>

    </div>
  </div>
</section>

  </Layout>
</template>

<script setup>
import { ref } from 'vue'
import Layout from '../components/Layout/Layout.vue'
import Card from '../components/UI/Card.vue'
import Carousel from '../components/UI/Carousel.vue'

const heroSlides = ref([
  {
    image: '/img-carrucel/trabaje_con_nosotros_2025.jpeg',
    alt: 'Sistema de vigilancia y seguridad',
    badge: {
      title: 'Área de Tecnología',
      subtitle: 'lideramos la innovación en tecnología de seguridad'
    }
  },
  {
    image: '/img-carrucel/DSC05309.jpg',
    alt: 'Vigilancia física profesional',
    badge: {
      title: 'Personal de Servicio',
      subtitle: 'Nuestro personal de servicio está comprometido con la excelencia'
    }
  },
  {
    image: '/img-carrucel/vigilancia_fisica_20251112.jpg',
    alt: 'Tecnología de seguridad avanzada',
    badge: {
      title: 'Vigilancia Física',
      subtitle: 'Profesionales altamente capacitados'
    }
  },
  {
    image: '/img-carrucel/DSC05709-Editar.jpg',
    alt: 'Tecnología de seguridad avanzada',
    badge: {
      title: 'Verificación punto a punto',
      subtitle: 'Verificamos cada punto de la propiedad para garantizar la seguridad'
    }
  },
  {
    image: '/img-carrucel/concejo.jpg',
    alt: 'Tecnología de seguridad avanzada',
    badge: {
      title: 'Consejo de administración',
      subtitle: 'El consejo de administración es el encargado de la dirección y gestión de la empresa'
    }
  }
])
</script>

