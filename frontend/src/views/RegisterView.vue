<script setup lang="ts">
import { ref } from "vue";
import API from "../services/api";

const username = ref("");
const email = ref("");
const password = ref("");

const register = async () => {
  try {
    await API.post("/auth/register", {
      username: username.value,
      email: email.value,
      password: password.value,
    });

    alert("Registration successful! You can now log in.");
  } catch (error) {
    console.error("Registration failed", error);
  }
};
</script>

<template>
  <form @submit.prevent="register">
    <input v-model="username" placeholder="Username" />
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit">Register</button>
  </form>
</template>
