import { defineComponent, ref, onMounted } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import InfoBox from '../components/InfoBox.js';
import { getWelcomePost } from '../services/postService.js';

export default defineComponent({
  name: 'HomePage',
  components: { InfoBox },
  setup() {
    const welcome = ref('Cargando...');

    onMounted(async () => {
      try {
        const data = await getWelcomePost();
        welcome.value = `Bienvenido: "${data.title}"`;
      } catch {
        welcome.value = 'Error al cargar mensaje de bienvenida.';
      }
    });

    return { welcome };
  },
  template: `
    <section>
      <h1>Inicio</h1>
      <InfoBox message="welcome" />
    </section>
  `
});
