<template>
  <div class="contact-page">
    <h1 class="title">Hello, Lets Get In Touch</h1>
    <p class="intro-text">Enter your information here, and I will get back to you</p>

     <!-- Contact Form -->

     <form @submit.prevent="handleSubmit" class="contact-form">
      <input v-model="name" type="text" placeholder="Name" required />
      <input v-model="surname" type="text" placeholder="Surname" required />
      <input v-model="phone" type="tel" placeholder="Phone Number" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <textarea v-model="query" placeholder="Your Query" required></textarea>
      <div class="form-buttons">
        <button type="submit">Submit</button>
        <button type="button" @click="clearFields">Clear Fields</button>
      </div>
    </form>

    <p class="intro-text">Having trouble contacting me? here is where I can be found</p>


    <div class="icons">
      <!-- LinkedIn Icon -->
      <span class="icon linkedin-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
        <a href="www.github.com/mekachi015">Github</a>
      </span>


      <!-- LinkedIn Icon -->
      <span class="icon linkedin-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
          <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v13A1.5 1.5 0 0 0 1.5 16h13A1.5 1.5 0 0 0 16 14.5v-13A1.5 1.5 0 0 0 14.5 0h-13zM5.93 13H3.33v-5.86h2.6V13zm-1.3-6.1a1.508 1.508 0 1 1 .001-3.016 1.508 1.508 0 0 1-.001 3.016zm8.97 6.1h-2.6v-2.81c0-1.683-1.2-1.557-1.484-1.557-1.264 0-1.564.991-1.564 2.013v2.354h-2.6v-5.86h2.6v.795c.341-.515.953-1.262 2.263-1.262 1.648 0 2.867 1.082 2.867 3.415v2.912h.002z" />
        </svg>
        <p></p>
        <a href="www.linkedin.com/in/katlego-makoti-9108821a6/">LinkedIn</a>
      </span>

      <!-- Facebook icon -->
      <span class="icon facebook-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
        </svg>
        <a href="www.facebook.com/katlego-mekachi-makoti">Facebook</a>
      </span>

      <!-- Instagram Icon -->
      <span class="icon instagram-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0s-2.444.01-3.298.048c-.78.035-1.204.166-1.486.275-.373.145-.64.319-.92.599s-.453.546-.598.92c-.11.281-.24.705-.275 1.485-.039.843-.047 1.096-.047 3.231s.008 2.389.047 3.232c.036.78.166 1.203.275 1.485a2.5 2.5 0 0 1 .599.919c.28.28.546.453.92.598.28.11.704.24 1.485.276.738.034 1.091.046 3.233.046s2.39-.009 3.233-.047c.78-.036 1.203-.166 1.485-.276a2.5 2.5 0 0 1 .92-.598c.11-.281.24-.705.275-1.485.038-.843.046-1.096.046-3.233s-.008-2.388-.046-3.231c-.036-.78-.166-1.204-.276-1.486-.145-.373-.319-.64-.599-.92s-.546-.453-.92-.598c-.282-.11-.705-.24-1.485-.276-.738-.034-1.091-.046-3.233-.046zm0 3.767a3.592 3.592 0 1 0 0 7.185 3.592 3.592 0 0 0 0-7.185zm0 5.737a2.145 2.145 0 1 1 0-4.29 2.145 2.145 0 0 1 0 4.29zm4.15-5.737a.5.5 0 0 0 .5-.5v-.001a.5.5 0 0 0-.5-.5h-.001a.5.5 0 0 0-.5.5v.001a.5.5 0 0 0 .5.5h.001z" />
        </svg>
        <p></p>
        <a href="www.instagram.com/katlego_makoti">Instagram</a>
      </span>

      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      surname: '',
      phone: '',
      email: '',
      query: ''
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here
      console.log({
        name: this.name,
        surname: this.surname,
        phone: this.phone,
        email: this.email,
        query: this.query
      });
      // Clear the fields after submission if needed
      this.clearFields();
    },
    clearFields() {
      this.name = '';
      this.surname = '';
      this.phone = '';
      this.email = '';
      this.query = '';
    }
  }
};
</script>

<style scoped>
/* Existing styles */
.contact-page {
  text-align: center;
  background-color: #ffebcd;
  position: relative;
  bottom:1.3rem
}

.title {
  font-size: 2em;
  margin-bottom: 1em;
  animation: slideIn 0.5s ease forwards;
  font-family: 'Pacifico', cursive; /* Creative handwritten font */
  color: #d32f2f;
}

.intro-text {
  font-size: 1rem;
  animation: fadeIn 0.5s ease forwards;
}

/* Form styling */
.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
}

.contact-form input,
.contact-form textarea {
  width: 300px;
  padding: 0.5em;
  margin: 0.5em 0;
  border: 1px solid #d32f2f;
  border-radius: 4px;
}

.form-buttons {
  display: flex;
  gap: 1em;
}

.form-buttons button {
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  background: #d32f2f;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;
}

.form-buttons button:hover {
  background: #ec4040;
}

p{
  font-size: 0.5rem;
}

/* Icons styling */
.icons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
}

.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1em;
  border: 2px dashed #d32f2f;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.8);
  transition: background 0.3s ease, transform 0.3s ease;
  animation: fadeInUp 0.5s ease forwards;
}

.icon:hover {
  background: rgba(255, 255, 255, 1);
  transform: scale(1.05);
}

.icon svg {
  fill: #d32f2f;
  transition: fill 0.3s ease;
}

.icon:hover svg {
  fill: #e74c3c;
}

.icon p {
  margin: 0;
  color: #d32f2f;
  transition: color 0.3s ease;
}

.icon:hover p {
  color: #e74c3c;
}

.icon a{
  color: #d32f2f;
}

/* Animations */
@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
