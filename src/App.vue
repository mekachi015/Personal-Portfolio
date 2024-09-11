<template>
  <div id="app">
    <nav>
      <!-- <ul>
        <li><a><router-link :to="{ name: 'Home' }">Home</router-link></a></li>
        <li><a><router-link :to="{ name: 'About' }">About</router-link></a></li>
        <li><a><router-link :to="{ name: 'Project' }">Projects</router-link></a></li>
        <li><a><router-link :to="{ name: 'Contact' }">Contact</router-link></a></li>
      
      </ul> -->

        <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'About' }">About</router-link></li>
        <li><router-link :to="{ name: 'Project' }">Projects</router-link></li>
        <li><router-link :to="{ name: 'Contact' }">Contact</router-link></li>

      
    </nav>
    

    <!-- This is where the current route component will be rendered -->
    <router-view></router-view>

    <HomeView/>
    <AboutView/>
    <ProjectView/>
    <ContactView/>
  </div>
</template>

<script>

import AboutView from './components/views/AboutView.vue';
import ContactView from './components/views/ContactView.vue';
import HomeView from './components/views/HomeView.vue';
import ProjectView from './components/views/ProjectView.vue';

export default {
  name: 'App',
  components: {
    HomeView,
    AboutView,
    ContactView,
    ProjectView
  },

  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
};
</script>

<style>
/* Basic styling for the navigation bar */
nav {
  background-color: #333;
  padding: 10px;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 10px;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

nav ul li a:hover {
  text-decoration: underline;
}
</style>
