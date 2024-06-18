<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">login</RouterLink>
      <RouterLink to="/profile">profile</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
