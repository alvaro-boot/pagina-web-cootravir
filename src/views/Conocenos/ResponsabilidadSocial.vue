<template>
  <Layout>
    <section class="content-section">
      <div class="container">
        <h1>Políticas de Responsabilidad Social</h1>
        <p>
          COOTRAVIR CTA está comprometida con el desarrollo sostenible, el bienestar
          de las personas y el respeto por los derechos humanos en todos los ámbitos
          de su operación.
        </p>

        <!-- Política General -->

          <p>
            COOTRAVIR CTA integra la Responsabilidad Social en la toma de decisiones
            de la Cooperativa, desarrollando actividades que estimulen el cumplimiento
            de la ley y den credibilidad de que ofrece servicios de seguridad confiables
            a los diferentes sectores de la sociedad.
          </p>
          <p>
            Por lo cual integra el cuidado de las personas mediante el cumplimiento
            de la prevención y promoción de la seguridad y salud en el trabajo, así
            mismo proporcionando igualdad de oportunidades y promoción profesional,
            asegurando la ausencia de discriminación por sexo, raza, religión, origen,
            estado civil, condición social o irregularidades que vulneren los Derechos
            Humanos.
          </p>
          <p>
            Todo ello la Cooperativa lo realiza en un sentido ético y de justicia,
            implicando el Código de Ética y Conducta a todos los trabajadores asociados
            y trabajadores no asociados que formen parte de esta actividad, así como
            a todos los procesos de gestión o áreas de trabajo.
          </p>


        <!-- Lineamientos -->
        <h2>Lineamientos en Responsabilidad Social y Derechos Humanos</h2>

        <div class="grid-lineamientos1">

          <Card>
            <template #title>1. Conflictos relacionados con el contexto laboral</template>
            <p>
              Cootravir CTA ha establecido el Comité Amigable de Composición (COACOM),
              quien se encarga de la investigación eficaz y ágil que se pondrá en marcha
              cuando se reciben y se da trámite a las situaciones que generan mal clima
              laboral.
            </p>
          </Card>

          <Card>
            <template #title>2. Trabajo Forzoso</template>
            <p>
              Cootravir CTA hace parte del cumplimiento de los requisitos normativos
              del Código Sustantivo del Trabajo y está prohibido que las personas
              realicen cualquier forma de trabajo forzado, incluido el trabajo bajo
              contrato de cumplimiento forzoso, la servidumbre por deudas, el trabajo
              militar, el trabajo esclavo o cualquier forma de tráfico humano.
            </p>
          </Card>

          <Card>
            <template #title>3. Trabajo Infantil</template>
            <p>
              La Cooperativa no contratará a ninguna persona por debajo de la edad
              legal permitida para trabajar. No obstante, si la persona solicitada
              se encuentra en etapa productiva como aprendiz del SENA u otras
              instituciones, se aceptará el aprendiz siempre y cuando se cuente
              con las especificaciones de mutuo acuerdo establecidas en el contrato.
            </p>
          </Card>

          <Card>
            <template #title>4. Promoción de la equidad de género</template>
            <p>
              Cootravir CTA promoverá prácticas que reflejen el respeto por la equidad
              de género y velará porque todos sus colaboradores sean tratados con
              respeto hacia su diversidad, promoviendo así mismo la igualdad de
              oportunidades.
            </p>
          </Card>


        </div>

        <div class="grid-lineamientos2">
          
          <Card>
            <template #title>5. Seguridad y Salud en el Trabajo</template>
            <p>
              Cootravir CTA tiene el compromiso de velar porque en los lugares de
              trabajo se respeten las mejores condiciones de seguridad y salud
              laboral.
            </p>
          </Card>

          <Card>
            <template #title>6. Prevención del Lavado de Activos y Financiación del Terrorismo</template>
            <p>
              Cootravir CTA tiene el compromiso de que todo el personal esté obligado
              a colaborar en las verificaciones o recopilación de información requerida
              para el Sistema de Prevención de Lavado de Activos y Financiación del
              Terrorismo, así como a informar las operaciones que, dentro del desarrollo
              normal de sus labores y de acuerdo con la política, correspondan a una
              operación inusual o sospechosa.
            </p>
          </Card>

          <Card>
            <template #title>7. Medio Ambiente</template>
            <p>
              Cootravir CTA asume el compromiso, junto con todo su personal, del cuidado
              del medio ambiente y la biodiversidad, reconociendo y promoviendo
              prácticas responsables en el desarrollo de la labor cotidiana.
            </p>
          </Card>
        </div>

        <!-- Fecha -->
        <p style="margin-top: 2rem; font-style: italic;">
          La presente política se suscribe a los treinta y un (31) días del mes de mayo de 2023.
        </p>

      </div>
    </section>
  </Layout>
</template>

<script setup>
import Layout from '../../components/Layout/Layout.vue'
import Card from '../../components/UI/Card.vue'
</script>
