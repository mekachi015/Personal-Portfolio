<template>
    <div class="about-container">
      <h1>Here are a few things about me</h1>
      <div class="about-content">
        <p class="fade-in">As a passionate full-stack intern, I bring a solid foundation in both front-end and back-end technologies,
          combined with a strong academic background in Information Technology. My journey in IT began during high
          school, where I developed an early interest in technology and computing. This enthusiasm led me to pursue IT
          studies through matric and further into varsity, where I honed my skills in various programming languages and
          frameworks.
        </p>
        <p class="fade-in">Beyond my technical expertise, I am an avid gamer and basketball enthusiast. My love for video games has
          fostered a keen eye for detail and a deep understanding of user experience, which translates into my work as a
          developer. Similarly, my involvement in basketball has taught me valuable lessons in teamwork, strategic
          thinking, and perseverance.
        </p>
        <p class="fade-in">I thrive in dynamic environments where I can leverage my technical skills while also drawing from my hobbies to
          bring creativity and problem-solving abilities to the table. My goal is to contribute to innovative projects,
          collaborate with talented teams, and continue growing both professionally and personally in the tech industry.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutView',
    mounted() {
      // Trigger animations when component is mounted
      const fadeInElements = document.querySelectorAll('.fade-in');
      fadeInElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('visible');
        }, index * 1500); // Staggering the animations
      });
    },
  };
  </script>
  
  <style scoped>
  .about-container {
    background-color: #1b1b1b;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
  
  h1 {
    font-family: 'Merriweather', serif;
    color: #f7c59f;
    font-size: 2.5rem;
    margin-bottom: 20px;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  }
  
  .about-content {
    font-family: 'Lora', serif;
    color: #e0e0e0;
    line-height: 1.7;
  }
  
  p {
    margin-bottom: 20px;
    font-size: 1.2rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
    opacity: 0; /* Hidden initially */
    transform: translateY(20px); /* Slide up from below */
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  p.visible {
    opacity: 1; /* Fully visible */
    transform: translateY(0); /* Move to original position */
  }
  
  .about-content p:last-of-type {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  
    p {
      font-size: 1rem;
    }
  }
  </style>
  