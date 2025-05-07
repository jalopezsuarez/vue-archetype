import { defineComponent } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

export default defineComponent({
  name: 'InfoBox',
  props: {
    message: String
  },
  template: `
    <div class="info-box">
      <p>{{ message }}</p>
    </div>
  `
});
