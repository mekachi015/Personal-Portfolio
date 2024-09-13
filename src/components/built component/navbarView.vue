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

<style scoped>
/* Navbar styling */
.navbar {
  background-color: #1a1a1a; /* Dark, elegant background */
  padding: 15px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
}

/* Hover effect for the navbar */
.navbar:hover {
  background-color: #333;
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
  margin: 0 25px;
  color: #f2f2f2;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.05em;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  position: relative;
}

/* Hover effects for nav items */
.nav-item:hover {
  color: #ffcc00;
  border-bottom: 2px solid #ffcc00;
}

/* Underline animation for nav items */
.nav-item::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: #ffcc00;
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
  padding: 80px 20px;
  color: #fff;
  text-align: center;
}

#home {
  background-color: #1e1e1e;
}

#about {
  background-color: #2a2a2a;
}

#project {
  background-color: #373737;
}

#contact {
  background-color: #444444;
}
</style>
