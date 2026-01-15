import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/conocenos",
    name: "Conocenos",
    component: () => import("../views/Conocenos/Index.vue"),
  },
  {
    path: "/conocenos/que_es_cootravir",
    name: "Que Es Cootravir C.T.A",
    component: () => import("../views/Conocenos/que_es_cootravir.vue"),
  },
  {
    path: "/conocenos/noticias",
    name: "Noticias",
    component: () => import("../views/Conocenos/Noticias.vue"),
  },
  {
    path: "/conocenos/politicas",
    name: "Politicas",
    component: () => import("../views/Conocenos/Politicas.vue"),
  },
  {
    path: "/conocenos/responsabilidad-social",
    name: "ResponsabilidadSocial",
    component: () => import("../views/Conocenos/ResponsabilidadSocial.vue"),
  },
  {
    path: "/conocenos/documentos-publicos",
    name: "DocumentosPublicos",
    component: () => import("../views/Conocenos/DocumentosPublicos.vue"),
  },
  {
    path: "/servicios",
    name: "Servicios",
    component: () => import("../views/Servicios/Index.vue"),
  },
  {
    path: "/servicios/vigilancia-fisica",
    name: "VigilanciaFisica",
    component: () => import("../views/Servicios/VigilanciaFisica.vue"),
  },
  {
    path: "/servicios/vigilancia-electronica",
    name: "VigilanciaElectronica",
    component: () => import("../views/Servicios/VigilanciaElectronica.vue"),
  },
  {
    path: "/servicios/monitoreo-alarmas",
    name: "MonitoreoAlarmas",
    component: () => import("../views/Servicios/MonitoreoAlarmas.vue"),
  },
  {
    path: "/servicios/cootravir-ph",
    name: "CootravirPH",
    component: () => import("../views/Servicios/CootravirPH.vue"),
  },
  {
    path: "/proteccion-datos",
    name: "ProteccionDatos",
    beforeEnter() {
      window.open("https://cootravir.dataprotected.co/", "_blank");
      return false;
    },
  },

  {
    path: "/solicitar-cotizacion",
    name: "SolicitarCotizacion",
    component: () => import("../views/SolicitarCotizacion.vue"),
  },
  {
    path: "/trabaja-con-nosotros",
    name: "TrabajaConNosotros",
    component: () => import("../views/TrabajaConNosotros.vue"),
  },
  {
    path: "/contactanos",
    name: "Contactanos",
    component: () => import("../views/Contactanos.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(), // Hash mode para que funcione sin servidor
  routes,

  // 👇 AQUÍ MISMO
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
