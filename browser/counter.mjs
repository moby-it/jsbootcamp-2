const { createApp, ref, computed } = Vue;
createApp({
  setup() {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);
    const countClass = computed(() => count.value > 10 ? 'highlighted' : '');
    
    const inc = () => count.value++;
    return {
      count,
      doubleCount,
      countClass,
      inc
    };
  }
}).mount('#app');