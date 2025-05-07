import { defineComponent, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import NewPostForm from '../components/NewPostForm.js';

export default defineComponent({
  name: 'AboutPage',
  components: { NewPostForm },
  setup() {
    const about = ref('Esta app tiene estructura modular con Pages + Components.');
    return { about };
  },
  template: `
    <section class="space-y-6">
      <div>
        <h1 class="text-2xl font-bold">Acerca de</h1>
        <p class="text-gray-700">{{ about }}</p>
      </div>

      <div>
        <h2 class="text-xl font-semibold">Publica una demostración</h2>
        <NewPostForm />
      </div>
    </section>
  `
});
