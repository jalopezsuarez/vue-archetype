import { defineComponent } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import PostList from '../components/PostList.js';
import NewPostForm from '../components/NewPostForm.js';
import InfoBox from '../components/InfoBox.js';

export default defineComponent({
  name: 'PostPage',
  components: { PostList, NewPostForm, InfoBox },
  template: `

    <section class="space-y-10">   
    <hr class="my-6 border-gray-300" />
    <InfoBox message="esta pagina es de posts"/>
    <hr class="my-6 border-gray-300" />
      <NewPostForm />
      <hr class="my-6 border-gray-300" />
      <PostList />
    </section>
  `
});
