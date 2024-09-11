<template>
  <div id="app">
    <nav class="navbar">
      <ul class="navbar-menu">
        <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'About' }">About</router-link></li>
        <li><router-link :to="{ name: 'Project' }">Projects</router-link></li>
        <li><router-link :to="{ name: 'Contact' }">Contact</router-link></li>
      </ul>
    </nav>
    <!-- This is where the current route component will be rendered -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
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
