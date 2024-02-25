import { createApp, defineAsyncComponent } from 'vue';
import router from '@router/index';
import pinia from '@shared/stores/pinia';
import i18n from '@translation/index';

import "@assets/index.scss";

// create lazy APP
const app = createApp(defineAsyncComponent(() => import('@ui/App.vue')));

app.use(router);

router.isReady().then(() => {
  app
    .use(i18n)
    .use(pinia)
    .mount('#app')
});
