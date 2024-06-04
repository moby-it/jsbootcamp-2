<script setup>
import { ref, onMounted } from 'vue';

const checked = ref(false);
const text = ref('');

</script>
<template>

  <section>
    <label for="checkbox">{{ checked }}</label>
    <input type="checkbox" id="checkbox" v-model="checked" />
  </section>
  <section>
    <input v-model="text" />
  </section>
  {{ text }}
</template>