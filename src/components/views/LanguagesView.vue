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
        { name: "HTML", proficiency: 70, type: "coding" },
        { name: "CSS", proficiency: 85, type: "coding" },
        { name: "JavaScript", proficiency: 90, type: "coding" },
        { name: "Project Management", proficiency: 60, type: "non-coding" },
        { name: "Communication", proficiency: 80, type: "non-coding" },
        { name: "TypeScript", proficiency: 75, type: "coding" },
        { name: "Java", proficiency: 65, type: "coding" },
        { name: "Vue", proficiency: 85, type: "coding" },
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
}

.skill-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
}

.skill-info {
  display: flex;
  align-items: center;
  margin-right: 20px;
  width: 150px;
}

h3 {
  font-size: 18px;
  margin-right: 15px;
}

/* Circular and horizontal progress bar styling */
.circular-progress,
.progress-bar {
  position: relative;
  width: 100px;
  height: 100px; /* Adjust size for the circle */
}

.circular-progress svg,
.progress-bar {
  width: 100%;
  height: 100%;
}

.circle {
  fill: none;
  stroke-width: 4;
}

/* Smooth animation and glowing effect */
.circle-progress {
  stroke-linecap: round;
  stroke-dasharray: 0 100; /* Default empty */
  transition: stroke-dasharray 1.5s ease, stroke 0.5s ease;
}

.skill-item:hover .circle-progress {
  stroke-dasharray: var(--progress), 100; /* Fill based on the skill's percentage */
  stroke: #e74c3c; /* Red stroke */
}

.skill-item:hover .circular-progress {
  filter: drop-shadow(0 0 20px #e74c3c); /* Glowing effect */
}
</style>
