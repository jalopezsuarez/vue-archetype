import { defineComponent, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { postNewEntry } from '../services/postService.js';

export default defineComponent({
  name: 'NewPostForm',
  setup() {
    const title = ref('');
    const body = ref('');
    const loading = ref(false);
    const message = ref('');
    const error = ref('');

    const submitPost = async () => {
      message.value = '';
      error.value = '';
      loading.value = true;

      try {
        const result = await postNewEntry({ title: title.value, body: body.value });
        message.value = `¡Post enviado con ID ${result.id}!`;
        title.value = '';
        body.value = '';
      } catch (err) {
        error.value = 'Error al enviar el post.';
      } finally {
        loading.value = false;
      }
    };

    return { title, body, loading, message, error, submitPost };
  },
  template: `
    <form @submit.prevent="submitPost" class="space-y-4 bg-white p-4 rounded shadow">
      <div>
        <label class="block text-sm font-medium">Título</label>
        <input v-model="title" required class="w-full border p-2 rounded" />
      </div>
      <div>
        <label class="block text-sm font-medium">Contenido</label>
        <textarea v-model="body" required class="w-full border p-2 rounded"></textarea>
      </div>
      <button type="submit" :disabled="loading" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        {{ loading ? 'Enviando...' : 'Publicar' }}
      </button>
      <p v-if="message" class="text-green-600">{{ message }}</p>
      <p v-if="error" class="text-red-600">{{ error }}</p>
    </form>
  `
});
