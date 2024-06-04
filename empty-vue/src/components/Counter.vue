<script setup>
import { computed, ref, inject } from 'vue';

const initialCount = inject('initialCount') || 10;

defineEmits(['countUpdated']);

const count = ref(initialCount);
const doubleCount = computed(() => count.value * 2);

function increment() {
  count.value++;
}
</script>
<template>
  <h1>Counter</h1>
  <p>count: {{ count }}</p>
  <p>double count :{{ doubleCount }}</p>
  <button @click="() => {
    increment();
    $emit('countUpdated', count);
  }">Inc</button>
</template>