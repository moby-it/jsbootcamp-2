// mouse.js
import { ref, onMounted, onUnmounted } from 'vue';
import { useEventListener } from './event';

// by convention, composable function names start with "use"
export function useMouse() {
  // state encapsulated and managed by the composable
  const x = ref(0);
  const y = ref(0);
  useEventListener(window, 'mousemove', update);
  // a composable can update its managed state over time.
  function update(event) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  // expose managed state as return value
  return { x, y };
}