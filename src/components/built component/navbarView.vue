<template>
    <div>
      <nav class="navbar">
        <ul class="nav-list">
          <li class="nav-item" @click="scrollToSection('home')">Home</li>
          <li class="nav-item" @click="scrollToSection('/about')">About</li>
          <li class="nav-item" @click="scrollToSection('project')">Project</li>
          <li class="nav-item" @click="scrollToSection('contact')">Contact</li>
        </ul>
      </nav>

    <section id="home">Home Section</section>
    <section id="about">About Section</section>
    <section id="project">Project Section</section>
    <section id="contact">Contact Section</section>
    </div>
  </template>
  
  <script>
export default {
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
  