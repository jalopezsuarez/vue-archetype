import { defineComponent, ref, onMounted } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { getAllPosts } from '../services/postService.js';

export default defineComponent({
  name: 'PostList',
  setup() {
    const posts = ref([]);
    const loading = ref(true);
    const error = ref(null);

    onMounted(async () => {
      try {
        posts.value = await getAllPosts();
      } catch (err) {
        error.value = 'Error al cargar los posts.';
      } finally {
        loading.value = false;
      }
    });

    return { posts, loading, error };
  },
  template: `
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Listado de Posts</h2>
      <p v-if="loading">Cargando posts...</p>
      <p v-if="error" class="text-red-600">{{ error }}</p>
      <ul v-if="!loading && !error" class="list-disc pl-6 space-y-2">
        <li v-for="post in posts" :key="post.id">
          <strong>{{ post.title }}</strong>
          <p class="text-sm text-gray-600">{{ post.body }}</p>
        </li>
      </ul>
    </section>
  `
});
