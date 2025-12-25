<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  console.log("Dashboard loaded");
});
</script>

<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <p>You are logged in 🎉</p>
  </div>
</template>
