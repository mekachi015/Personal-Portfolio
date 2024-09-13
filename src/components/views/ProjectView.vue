<template>
    <div class="project-page">
      <h1 class="title"> this is the Projects page</h1>
      <p class="intro-text">Here are some of the things I have been working on</p>
  
      <div class="projects-list">
        <span class="project-item">Project One</span>
        <span class="project-item">Project Two</span>
        <span class="project-item">Project Three</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectView',
  };
  </script>
  
  <style scoped>
  /* Dark and elegant theme */
  .project-page {
    background-color: #1e1e1e; /* Dark background */
    color: #f5f5f5; /* Light text for contrast */
    padding: 50px;
    min-height: 100vh; /* Full viewport height */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  /* Title styling */
  .title {
    font-size: 2.5rem;
    color: #ffcc00; /* Elegant gold */
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: bold;
    transition: color 0.3s ease;
  }
  
  /* Paragraph/intro text */
  .intro-text {
    font-size: 1.2rem;
    margin-bottom: 40px;
    color: #d3d3d3;
    text-align: center;
    max-width: 600px;
    line-height: 1.6;
  }
  
  /* Project list container */
  .projects-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  /* Individual project items */
  .project-item {
    background-color: #333333; /* Dark gray for contrast */
    color: #ffffff;
    padding: 10px 20px;
    margin: 10px 0;
    border-radius: 8px;
    font-size: 1.5rem;
    width: 250px;
    text-align: center;
    transition: background-color 0.3s ease, transform 0.3s ease;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  /* Hover effects for project items */
  .project-item:hover {
    background-color: #444444;
    transform: scale(1.05);
  }
  
  /* Responsive styling */
  @media (max-width: 600px) {
    .title {
      font-size: 2rem;
    }
  
    .intro-text {
      font-size: 1rem;
    }
  
    .project-item {
      font-size: 1.2rem;
      width: 200px;
    }
  }
  </style>
  