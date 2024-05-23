<script setup>
import { computed, ref } from 'vue';
const count = ref(0);
const doubleCount = computed(() => count.value > 10 ? count.value * 2 : 0
);



</script>

<template>
  <main>
    <h1>Hello from Vue</h1>
    <p>{{ count }}</p>
    <p>{{ doubleCount }}</p>
    <button @click="count = count + 1">Inc</button>
  </main>
</template>

<style scoped></style>
