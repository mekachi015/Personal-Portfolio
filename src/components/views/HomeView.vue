<template>
    <div class="about-container">
      <h1>Katlego Makoti</h1>
      <h2>Aspiring Developer</h2>
      <div class="content">
        <p class="fade-in">I am Katlego Makoti am a 25-year-old, participating in a full stack development learnership,with a passion for both technology and sports. Currently, I am immersing myself in full-stack development, building dynamic, user-centric applications. My journey in IT began in high school and continued through varsity, where I gained comprehensive knowledge in programming languages and frameworks.</p>
  
        <p class="fade-in delay-1">Originally from Limpopo, I moved to pursue opportunities that would enhance my skills and broaden my horizons. My role as a full-stack learner, reflects my dedication to growth in the tech field. I am excited about the Shaaper Learnership, which aligns perfectly with my career goals.</p>
  
        <p class="fade-in delay-2">Outside of work, I'm an avid gamer and basketball player. Gaming helps me understand complex systems, while basketball has taught me teamwork, strategy, and resilience, qualities I bring into my work environment.</p>
  
        <p class="fade-in delay-3">Balancing my technical skills with my interests, I contribute to innovative projects, collaborate with diverse teams, and continuously evolve as a developer. My drive is fueled by the pursuit of excellence and a desire to make a meaningful impact in tech.</p>


      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView',
  };
  </script>
  
  <style scoped>
  .about-container {
    background-color: #1b1b1b;
    color: #e0e0e0;
    padding: 40px;
    border-radius: 10px;
    max-width: 800px;
    margin: 0 auto;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
  }
  
  h1 {
    text-align: center;
    color: #ffffff;
    font-size: 2.5em;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  
  p {
    font-size: 1.2em;
    line-height: 1.8;
    color: #b8b8b8;
    margin: 20px 0;
  }
  
  .fade-in {
    opacity: 0;
    animation: fadeIn 1s forwards ease-out;
  }
  
  .delay-1 {
    animation-delay: 2s;
  }
  
  .delay-2 {
    animation-delay: 2.5s;
  }
  
  .delay-3 {
    animation-delay: 2.5s;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  