<script setup>
import { provide } from "vue";
import Counter from "./Counter.vue";
provide("initialCount", 10);
</script>
<template>
  <Counter />
  <Counter />
  <Counter />
</template>
