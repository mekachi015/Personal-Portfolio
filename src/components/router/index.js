import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import ProjectView from '../views/ProjectView.vue';

// Define routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/project',
    name: 'Project',
    component: ProjectView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },



];

// Create the router instance and pass the 'routes' array
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
