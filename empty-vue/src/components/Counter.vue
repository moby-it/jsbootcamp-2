<script setup>
import { computed, ref } from 'vue';

const count = ref(0);
const doubleCount = computed(() => count.value * 2);

function increment() {
  count.value++;
}
</script>
<template>
  <h1>Counter</h1>
  <p>count: {{ count }}</p>
  <p>double count :{{ doubleCount }}</p>
  <button @click="increment">Inc</button>
</template>