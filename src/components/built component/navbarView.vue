<template>
    <div>
      <nav class="navbar">
        <ul class="nav-list">
          <li class="nav-item" @click="scrollToSection('home')">Home</li>
          <li class="nav-item" @click="scrollToSection('about')">About</li>
          <li class="nav-item" @click="scrollToSection('project')">Project</li>
          <li class="nav-item" @click="scrollToSection('contact')">Contact</li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Basic styling for the navbar */
  .navbar {
    background-color: #333;
    padding: 10px 0;
  }
  
  .nav-list {
    list-style-type: none;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
  }
  
  .nav-item {
    margin: 0 15px;
    color: white;
    cursor: pointer;
    font-size: 18px;
  }
  
  .nav-item:hover {
    color: #f0a500;
    text-decoration: underline;
  }
  </style>
  