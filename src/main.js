import { createApp } from 'vue';
import App from './App.vue';
import router from './components/router';

const app = createApp(App);

// Use router
app.use(router);

// Mount the app
app.mount('#app');

// Handle smooth scrolling to top after each route change
router.afterEach(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
