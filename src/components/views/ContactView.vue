<script setup lang="ts">
 // Adjust the path if necessary
</script>

<template>
  <div class="contact-page">
    <h1 class="title">Hello, this is the Contact page</h1>
    <p class="intro-text">If you would like to get in touch with me, this is where I can be found:</p>

    <div class="icons">
      <!-- Facebook icon -->
      <span class="icon facebook-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
        </svg>
        <p>www.facebook.com/katlego-mekachi-makoti</p>
      </span>

      <!-- Instagram Icon -->
      <span class="icon instagram-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.091-.046 3.233-.046zm0 3.767a3.592 3.592 0 1 0 0 7.185 3.592 3.592 0 0 0 0-7.185zm0 5.737a2.145 2.145 0 1 1 0-4.29 2.145 2.145 0 0 1 0 4.29zm4.15-5.737a.5.5 0 0 0 .5-.5v-.001a.5.5 0 0 0-.5-.5h-.001a.5.5 0 0 0-.5.5v.001a.5.5 0 0 0 .5.5h.001z" />
        </svg>
        <p>www.instagram.com/katlego_makoti</p>
      </span>

      <!-- LinkedIn Icon -->
      <span class="icon linkedin-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
          <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v13A1.5 1.5 0 0 0 1.5 16h13A1.5 1.5 0 0 0 16 14.5v-13A1.5 1.5 0 0 0 14.5 0h-13zM5.93 13H3.33v-5.86h2.6V13zm-1.3-6.1a1.508 1.508 0 1 1 .001-3.016 1.508 1.508 0 0 1-.001 3.016zm8.97 6.1h-2.6v-2.81c0-1.683-1.2-1.557-1.484-1.557-1.264 0-1.564.991-1.564 2.013v2.354h-2.6v-5.86h2.6v.795c.341-.515.953-1.262 2.263-1.262 1.648 0 2.867 1.082 2.867 3.415v2.912h.002z" />
        </svg>
        <p>www.linkedin.com/in/katlego-makoti-9108821a6/</p>
      </span>
    </div>

    <!-- Contact form component -->
    <QueryForm />
  </div>
</template>

<style scoped>
.contact-page {
  color: #f5f5f5;
  padding: 2rem;
}

.title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.intro-text {
  margin-bottom: 2rem;
}

.icons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.icon {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon p {
  margin: 0;
}

.facebook-icon {
  color: #4267b2;
}

.instagram-icon {
  color: #c13584;
}

.linkedin-icon {
  color: #0a66c2;
}
</style>
