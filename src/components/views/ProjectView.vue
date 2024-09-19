<template>
  <div class="project-page">
    <h1 class="title">Projects Page</h1>
    <p class="intro-text">Here are some of the things I have been working on</p>

    <div class="projects-list">
      <div class="project-item">
        <img src="path/to/screenshot1.jpg" alt="Project One Screenshot" class="project-image" />
        <h2 class="project-header">Project One</h2>
        <p class="project-description">A brief description of Project One, highlighting its features and technology.</p>
        <a href="https://github.com/yourusername/project-one" class="github-link" target="_blank">View on GitHub</a>
      </div>

      <div class="project-item">
        <img src="path/to/screenshot2.jpg" alt="Project Two Screenshot" class="project-image" />
        <h2 class="project-header">Project Two</h2>
        <p class="project-description">A brief description of Project Two, highlighting its features and technology.</p>
        <a href="https://github.com/yourusername/project-two" class="github-link" target="_blank">View on GitHub</a>
      </div>

      <div class="project-item">
        <img src="path/to/screenshot3.jpg" alt="Project Three Screenshot" class="project-image" />
        <h2 class="project-header">Project Three</h2>
        <p class="project-description">A brief description of Project Three, highlighting its features and technology.</p>
        <a href="https://github.com/yourusername/project-three" class="github-link" target="_blank">View on GitHub</a>
      </div>
    </div>
  </div>
</template>

  
  <script>
  export default {
    name: 'ProjectView',
  };
  </script>
  
  <style scoped>
 .project-page {
  background-color: #ffebcd; /* Warm off-white background */
  color: #333; /* Dark text for contrast */
  padding: 50px;
  min-height: 100vh; /* Full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Prevent overflow of elements */
}

.title {
  font-family: 'Pacifico', cursive; /* Handwritten font for title */
  font-size: 2.5rem;
  color: #d32f2f; /* Bold red color */
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: bold;
  text-align: center;
}

.intro-text {
  font-family: 'Poppins', sans-serif; /* Modern sans-serif for intro */
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #555; /* Darker gray for readability */
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
}

.projects-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project-item {
  background-color: #ffffff; /* White background for project cards */
  border: 2px solid #ffcc00; /* Gold border for emphasis */
  color: #333; /* Dark text */
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  width: 300px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  position: relative; /* For creative positioning */
  overflow: hidden; /* Prevent overflow */
}

.project-image {
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
  animation: bounce 1s infinite; /* Bounce effect for images */
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

.project-header {
  font-family: 'Amatic SC', cursive; /* Decorative font for project headers */
  font-size: 1.8rem;
  color: #d32f2f; /* Bold red color */
  margin-bottom: 10px;
}

.project-description {
  font-family: 'Poppins', sans-serif; /* Modern sans-serif for descriptions */
  margin-bottom: 15px;
}

.github-link {
  font-family: 'Poppins', sans-serif; /* Modern sans-serif for links */
  color: #ffcc00; /* Gold color for links */
  text-decoration: none;
  transition: color 0.3s ease;
}

.github-link:hover {
  color: #d32f2f; /* Change to red on hover */
}

.project-item:hover {
  transform: scale(1.05); /* Slight zoom effect on hover */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); /* Enhanced shadow on hover */
}

.fade-in {
  opacity: 0; /* Hidden initially */
  transform: translateY(20px); /* Slide up from below */
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1; /* Fully visible */
  transform: translateY(0); /* Move to original position */
}

@media (max-width: 600px) {
  .title {
    font-size: 2rem;
  }

  .intro-text {
    font-size: 1rem;
  }

  .project-item {
    width: 90%; /* Responsive width */
  }
}


  </style>
  