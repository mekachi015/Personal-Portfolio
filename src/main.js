import { createApp } from 'vue'
import App from './App.vue'
import router from './components/router';

createApp(App).mount('#app')
.use(router)
.mount('#app');
