<template>
  <div>
    <nav class="navbar">
      <ul class="nav-list">
        <li class="nav-item" @click="scrollToSection('home')">Home</li>
        <li class="nav-item" @click="scrollToSection('about')">About</li>
        <li class="nav-item" @click="scrollToSection('project')">Projects</li>
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

<style>
  /* Navbar styling */
.navbar {
  background-color: #f5f5f5; /* Light, minimalist background */
  padding: 15px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
}

/* Hover effect for the navbar */
.navbar:hover {
  background-color: #eaeaea; /* Slight hover effect */
}

/* Navigation list styling */
.nav-list {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

/* Individual nav items */
.nav-item {
  margin: 0 20px;
  color: #333; /* Muted gray for text */
  cursor: pointer;
  font-size: 16px;
  font-family: 'Lato', sans-serif; /* Clean sans-serif font */
  font-weight: 600;
  letter-spacing: 0.05em;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  position: relative;
}

/* Hover effects for nav items */
.nav-item:hover {
  color: #0056b3; /* Subtle blue accent for hover */
  border-bottom: 2px solid #0056b3;
}

/* Underline animation for nav items */
.nav-item::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: #0056b3;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out;
}

.nav-item:hover::before {
  visibility: visible;
  transform: scaleX(1);
}

/* Section styles */
section {
  padding: 100px 20px;
  color: #333;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  text-align: center;
}

#home {
  background-color: #fdfdfd; /* Off-white for minimalist feel */
}

#about {
  background-color: #f9f9f9; /* Slight gray for contrast */
}

#project {
  background-color: #f0f0f0; /* Deeper gray */
}

#contact {
  background-color: #eaeaea; /* Balanced neutral */
}

/* Typography for sections */
h1, h2 {
  font-family: 'Lora', serif; /* Elegant serif font for headers */
  color: #333;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.8em;
  margin-bottom: 15px;
}

</style>