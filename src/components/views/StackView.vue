<template>
  <div class="skills-dashboard">
    <h2>Skills Dashboard</h2>
    <div class="projects-list">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="skill-item"
        :style="{ '--progress': (skill.proficiency / 100) * 100 }"
      >
        <div class="skill-info">
          <h3>{{ skill.name }}</h3>
          <div class="circular-progress">
            <svg class="circle" viewBox="0 0 36 36">
              <path
                class="circle-bg"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                class="circle-progress"
                :stroke-dasharray="'0, 100'" 
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span class="percentage">{{ skill.proficiency }}%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillProgress",
  data() {
    return {
      skills: [
        { name: "HTML", proficiency: 80 },
        { name: "CSS", proficiency: 70 },
        { name: "JavaScript", proficiency: 85 },
        { name: "PostgreSQL", proficiency: 60 },
        { name: "Oracle SQL", proficiency: 55 },
        { name: "Typescript", proficiency: 50 },
        { name: "Java", proficiency: 65 },
        { name: "Python", proficiency: 51 },
        { name: "Vue", proficiency: 90 },
        { name: "Node.js", proficiency: 75 },
        { name: "Express.js", proficiency: 70 }
      ],
    };
  },
};
</script>

<style scoped>
.skills-dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #ffebcd; /* Warm off-white background */
  font-family: 'Poppins', sans-serif;
}

h2 {
  font-family: 'Pacifico', cursive; /* Creative handwritten font */
  font-size: 2.5rem;
  color: #d32f2f; /* Primary color */
  text-align: center;
  margin-bottom: 30px;
  animation: fade-in 1s ease;
}

.projects-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Space between items */
}

.skill-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 12px;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  box-shadow: 20px 20px 60px #d4d4d4, -20px -20px 60px #ffffff;
  transition: transform 0.3s, box-shadow 0.3s;
  width: 250px;
  animation: bounce-in 0.5s ease; /* Added bounce effect */
}

.skill-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.skill-info {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

h3 {
  font-size: 1.5rem;
  color: #e74c3c; /* Accent color */
  margin-right: 20px;
  text-align: left;
}

.circular-progress {
  position: relative;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circular-progress svg {
  width: 100%;
  height: 100%;
}

.circle {
  fill: none;
  stroke-width: 4;
}

.circle-bg {
  stroke: #ddd;
}

.circle-progress {
  stroke-linecap: round;
  stroke: #3498db; /* Primary color */
  stroke-dasharray: 0 100;
  transition: stroke-dasharray 1.5s ease, stroke 0.5s ease;
}

.skill-item:hover .circle-progress {
  stroke-dasharray: var(--progress), 100;
  stroke: #e74c3c; /* Accent color on hover */
}

.percentage {
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  color: #333;
}

/* Animations */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce-in {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Additional responsiveness */
@media (max-width: 600px) {
  h2 {
    font-size: 2rem;
  }

  .skill-item {
    width: 90%;
  }

  h3 {
    font-size: 1.2rem;
  }
}
</style>
