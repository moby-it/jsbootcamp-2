const { createApp, ref, computed } = Vue;
createApp({
  setup() {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);
    const inc = () => count.value++;
    return {
      count,
      doubleCount,
      inc
    };
  }
}).mount('#app');