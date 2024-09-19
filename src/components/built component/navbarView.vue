<template>
  <div>
    <nav class="navbar">
      <ul class="nav-list">
        <li class="nav-item" @mouseover="animateBounce"> 
          <router-link to="/" exact>Home</router-link>
        </li>
        <li class="nav-item" @mouseover="animateBounce">
          <router-link to="/about">About</router-link>
        </li>
        <li class="nav-item" @mouseover="animateBounce">
          <router-link to="/project">Projects</router-link>
        </li>
        <li class="nav-item" @mouseover="animateBounce">
          <router-link to="/skills">Skills</router-link>
        </li>
        <li class="nav-item" @mouseover="animateBounce">
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
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
    },
    animateBounce(event) {
      const target = event.currentTarget;
      target.classList.add('bounce');
      setTimeout(() => {
        target.classList.remove('bounce');
      }, 700); // Duration of the bounce effect
    }
  }
};
</script>

<style scoped>
/* Navbar styling */
.navbar {
  background-color: #ffebcd; /* Warm off-white background */
  padding: 15px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
}

/* Hover effect for the navbar */
.navbar:hover {
  background-color: #f8d8b5; /* Slightly darker on hover */
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
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.05em;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  position: relative;
}

/* Link color for router links */
.nav-item a {
  color: #d32f2f; /* Bold red color */
  text-decoration: none; /* Remove underline from links */
}

/* Hover effects for nav items */
.nav-item:hover a {
  color: #ffcc00; /* Change to gold on hover */
}

/* Bounce animation */
.bounce {
  animation: bounce 0.5s;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

/* Underline animation for nav items */
.nav-item::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: #ffcc00; /* Gold underline */
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out;
}

.nav-item:hover::before {
  visibility: visible;
  transform: scaleX(1);
}
</style>
