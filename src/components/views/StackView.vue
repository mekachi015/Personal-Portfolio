<template>
  <div class="skills-dashboard">
    <h2>Skills Dashboard</h2>
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
        { name: "Database", proficiency: 60 },
        { name: "Typescript", proficiency: 50 },
        { name: "Java", proficiency: 65 },
        { name: "Vue", proficiency: 90 },
      ],
    };
  },
};
</script>

<style>
.skills-dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.skill-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  width: 400px;
  transition: transform 0.3s;
}

.skill-item:hover {
  transform: scale(1.05);
}

.skill-info {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

h3 {
  font-size: 18px;
  margin-right: 20px;
  width: 120px;
  text-align: left;
  color: #333;
}

/* Circular progress styling */
.circular-progress {
  position: relative;
  width: 80px;
  height: 80px;
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
  stroke: #eee;
}

.circle-bg {
  stroke: #ddd;
}

.circle-progress {
  stroke-linecap: round;
  stroke: #3498db;
  stroke-dasharray: 0 100;
  transition: stroke-dasharray 1.5s ease, stroke 0.5s ease;
}

.skill-item:hover .circle-progress {
  stroke-dasharray: var(--progress), 100;
  stroke: #e74c3c;
}

.percentage {
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  color: #333;
}

.skill-item:hover .circular-progress {
  filter: drop-shadow(0 0 10px #e74c3c);
}

/* Additional responsiveness */
@media (max-width: 500px) {
  .skill-item {
    width: 100%;
    flex-direction: column;
    text-align: center;
  }

  h3 {
    margin-bottom: 10px;
  }
}
</style>
