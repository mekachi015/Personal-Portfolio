<template>
  <div class="about-container">
    <h1 data-fade>Katlego Makoti</h1>
    <h2 data-fade>Aspiring Developer</h2>
    <div class="content">
      <p class="fade-in delay-0" data-fade>
        I am Katlego Makoti, a 25-year-old full-stack development learner with a passion for both technology and sports.
        Currently, I am immersing myself in full-stack development, building dynamic, user-centric applications. My journey
        in IT began in high school and continued through varsity, where I gained comprehensive knowledge in programming
        languages and frameworks.      </p>
      <p class="fade-in delay-1" data-fade>
        Originally from Limpopo, I moved to pursue opportunities that would enhance my skills and broaden my horizons. My role
        as a full-stack learner reflects my dedication to growth in the tech field. I am excited about the Shaaper Learnership,
        which aligns perfectly with my career goals.      </p>
      <p class="fade-in delay-2" data-fade>
        Outside of work, I'm an avid gamer and basketball player. Gaming helps me understand complex systems, while basketball
        has taught me teamwork, strategy, and resilience, qualities I bring into my work environment.
      </p>
      <p class="fade-in delay-3" data-fade>
        Balancing my technical skills with my interests, I contribute to innovative projects, collaborate with diverse teams,
        and continuously evolve as a developer. My drive is fueled by the pursuit of excellence and a desire to make a
        meaningful impact in tech.
      </p>
    </div>
  </div>
</template>


<script>
export default {
  name: "HomeView",
  mounted() {
    // Select all elements with the `data-fade` attribute
    const fadeElements = document.querySelectorAll("[data-fade]");

    // Create a new Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // When the element is visible, add the fade-in class
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-active");
          observer.unobserve(entry.target); // Stop observing once it has animated
        }
      });
    });

    // Observe each fade element
    fadeElements.forEach(el => {
      observer.observe(el);
    });
  }
};

</script>

<style scoped>
/* Importing playful and modern fonts */
@import url("https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@400;700&display=swap");

.about-container {
  background-color: #fef4e4; /* Warm off-white background */
  color: #333; /* Dark neutral text */
  padding: 60px;
  border-radius: 15px;
  max-width: 1000px;
  margin: 60px auto;
  position: relative; /* For overlapping elements */
  font-family: 'Poppins', sans-serif; /* Clean, modern body text */
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

h1 {
  font-family: 'Pacifico', cursive; /* Playful, handwritten font */
  color: #ff4757; /* Bold red for creative energy */
  font-size: 3em;
  margin-bottom: 10px;
  text-align: center;
}

h2 {
  font-family: 'Poppins', sans-serif; /* Modern sans-serif for contrast */
  font-size: 1.8em;
  color: #3742fa; /* Vibrant blue for energy */
  font-weight: 400;
  margin-bottom: 40px;
  text-align: center;
}

p {
  font-family: 'Poppins', sans-serif;
  font-size: 1.2em;
  line-height: 1.8;
  color: #555;
  margin: 30px auto;
  max-width: 750px;
  position: relative;
  z-index: 2;
}

/* Default state before animation */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.fade-in-active {
  opacity: 1;
  transform: translateY(0);
}

.delay-1 {
  transition-delay: 0.5s; /* Adjust the delay */
}
.delay-2 {
  transition-delay: 1s;
}
.delay-3 {
  transition-delay: 1.5s;
}


@keyframes fadeInBounce {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95); /* Start with a slight bounce */
  }
  70% {
    transform: translateY(-10px) scale(1.05); /* Bounce effect */
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1); /* End smoothly */
  }
}

/* Creative layout with overlapping, vibrant elements */
.about-container::before {
  content: '';
  position: absolute;
  top: -20px;
  left: -20px;
  width: 80px;
  height: 80px;
  background-color: #ff6b81; /* Pink splash */
  border-radius: 50%;
  z-index: 1;
}

.about-container::after {
  content: '';
  position: absolute;
  bottom: -30px;
  right: -30px;
  width: 100px;
  height: 100px;
  background-color: #ffa502; /* Yellow splash */
  border-radius: 50%;
  z-index: 1;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .about-container {
    padding: 40px;
    margin: 20px;
  }

  h1 {
    font-size: 2.4em;
  }

  h2 {
    font-size: 1.5em;
  }

  p {
    font-size: 1.1em;
    margin: 15px 0;
  }
}
</style>
