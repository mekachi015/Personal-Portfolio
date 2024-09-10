<template>
  <div id="app">
    <nav>
      <ul>
        <li><a href="/">Home page</a></li>
        <li><a href="/about">About page</a></li>
        <li><a href="/projects">Projects page</a></li>
        <li><a href="/contact">Contact page</a></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
nav ul {
  list-style-type: none;
  padding: 0;
}
nav ul li {
  display: inline;
  margin-right: 15px;
}
</style>
