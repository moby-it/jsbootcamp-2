<script setup>
import { computed, ref } from 'vue';

const props = defineProps(['initialCount']);
defineEmits(['countUpdated']);
const count = ref(props.initialCount);
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