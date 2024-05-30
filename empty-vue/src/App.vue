<script setup>
import { computed, ref } from 'vue';
const count = ref(0);
const newCount = ref(0);
const doubleCount = computed(() => count.value * 2);
const message = ref("");

async function updateCount() {
  count.value++;
  newCount.value = count.value + 1;
  const c = newCount.value * 100;
  message.value = "C value is" + c;
}
</script>

<template>
  <main>
    <h1>Hello from Vue</h1>
    <p>{{ count }}</p>
    <p>{{ newCount }}</p>
    <p>{{ doubleCount }}</p>
    <p v-if="doubleCount > 20">Double count is over 20</p>
    <p>{{ message }}</p>
    <button @click="updateCount">Inc</button>
  </main>
</template>

<style scoped></style>
