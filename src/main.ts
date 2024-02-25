import { createApp, defineAsyncComponent } from 'vue';
import router from '@router/index';
import pinia from '@shared/stores/pinia';
import i18n from '@translation/index';

import "@assets/index.scss";

// create lazy APP
const app = createApp(defineAsyncComponent(() => import('@ui/App.vue')));

app
  .use(router)
  .use(i18n)
  .use(pinia);

router.isReady().then(() => {
  app.mount('#app')
});
