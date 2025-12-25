<script setup lang="ts">
import { ref } from "vue";
import API from "../services/api";

const email = ref("");
const password = ref("");

const login = async () => {
  try {
    const res = await API.post("/auth/login", {
      email: email.value,
      password: password.value,
    });

    localStorage.setItem("token", res.data.token);
  } catch (error) {
    console.error("Login failed", error);
  }
};
</script>

<template>
  <form @submit.prevent="login">
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit">Login</button>
  </form>
</template>
