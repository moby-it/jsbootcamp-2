<script setup>
defineEmits(['clicked']);
</script>
<template>
  <button @click="$emit('clicked')" style="padding: 1rem 2rem; border:1px solid black; min-width: 60px;">
    <slot></slot>
  </button>
</template>