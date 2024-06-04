<script setup>
import { ref } from 'vue';
import Button from './components/Button.vue';
import Reactive from './components/Reactive.vue';
import Counter from './components/Counter.vue';
import Forms from './components/Forms.vue';

const total = ref(0);
const showTotal = ref(false);
function countChange(e) {
  total.value += e;
}

</script>

<template>
  <main>
    <h2 v-if="showTotal">total: {{ total }}</h2>
    <Counter initial-count="5" @countUpdated="countChange" />
    <Counter initial-count="10" @countUpdated="countChange" />
    <Counter initial-count="15" @countUpdated="countChange" />
    <section>
      <Button @clicked="showTotal = true">
        Print Total
      </Button>
    </section>
    <!-- <Reactive /> -->
    <!-- <Forms /> -->
  </main>
</template>

<style scoped></style>
