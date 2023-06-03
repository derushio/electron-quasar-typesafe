import App from '@/App.vue';

import { createAppRouter } from '@/router';
import { Dialog, Loading, Notify, Quasar } from 'quasar';
import { createApp } from 'vue';

const app = createApp(App);
app.use(createAppRouter());
app.use(Quasar, {
  plugins: {
    Dialog,
    Loading,
    Notify,
  },
});
app.mount('#app');
