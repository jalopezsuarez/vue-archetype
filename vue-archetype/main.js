import { createApp, ref, h } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { routes, getComponentForRoute } from './router/routes.js';

// Reactividad para la ruta actual
const currentRoute = ref(window.location.hash.slice(1) || '/');

// Escuchar cambios en el hash para navegación SPA
window.addEventListener('hashchange', () => {
  currentRoute.value = window.location.hash.slice(1) || '/';
});

// Crear la instancia de Vue
const app = createApp({
  setup() {
    return () => {
      const Component = getComponentForRoute(currentRoute.value);
      return h(Component);
    };
  }
});

app.mount('#app');
