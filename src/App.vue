<template>
  <div id="app">
    <navbarView />
    <router-view></router-view>
  </div>
</template>

<script>
import navbarView from './components/built component/navbarView.vue';

export default {
  name: 'App',
  components: {
    navbarView,
  },
};
</script>

<style scoped>
/* Basic navbar styling */
.navbar {
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.navbar-menu li {
  margin-right: 15px;
}

.navbar-menu li:last-child {
  margin-right: 0;
}

.navbar-menu a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
}

.navbar-menu a:hover {
  color: #ff9800;
}
</style>
