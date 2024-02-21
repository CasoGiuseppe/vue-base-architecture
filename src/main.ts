import { createApp, defineAsyncComponent } from 'vue';
import router from '@router/index';
import pinia from '@shared/stores/pinia';


// create lazy APP
const app = createApp(defineAsyncComponent(() => import('@ui/App.vue')));

app
  .use(pinia)
  .use(router);

router.isReady().then(() => app.mount('#app'));
