import { createRouter, createWebHistory } from "vue-router"; // Only keep used imports

// Import the correct components
import HomeView from "../views/home.vue";
import AboutView from "../views/about.vue";
import project from "../views/project.vue"; // Use the updated multi-word name
import contact from "../views/contact.vue";

const routes = [
    { path: '/', name: 'HomeView', component: HomeView },
    { path: '/about', name: 'AboutView', component: AboutView },
    { path: '/projects', name: 'ProjectView', component: project }, // Use the correct name
    { path: '/contact', name: 'ContactView', component: contact }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), // Remove unused createWebHashHistory
    routes,
});

export default router;
