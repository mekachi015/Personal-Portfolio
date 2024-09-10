import { createRouter, createWebHistory } from "vue-router"; // Only keep used imports

// Import the correct components
import home from "../views/home vue/home.vue";
import about from "../views/about vue/about.vue";
import project from "../views/projects/project.vue"; // Use the updated multi-word name
import contact from "../views/contact/contact.vue";

const routes = [
    { path: '/', name: 'HomeView', component: home },
    { path: '/about', name: 'AboutView', component: about },
    { path: '/projects', name: 'ProjectView', component: project }, // Use the correct name
    { path: '/contact', name: 'ContactView', component: contact }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), // Remove unused createWebHashHistory
    routes,
});

export default router;
