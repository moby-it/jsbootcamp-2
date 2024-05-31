<script setup>
import { ref, computed } from 'vue';

let nums = ref([]);
let count = 0;
setInterval(() => {
  nums.value.push(count);
  count++;
  if (nums.value.length === 10) {
    nums.value = [];
  }
}, 1000);
const len = computed(() => nums.value.length);
</script>
<template>
  <p>{{ len }}</p>
  <ul>
    <li v-for="n in nums">{{ n }}</li>
  </ul>
</template>
