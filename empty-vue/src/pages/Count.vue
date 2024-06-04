<script setup>
import Counter from "../components/Counter.vue";
import { provide } from "vue";

provide("initialCount", 10);
</script>
<template>
  <Counter />
  <Counter />
  <Counter />
</template>
