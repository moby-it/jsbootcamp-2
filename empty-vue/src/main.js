import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');


const obj = {
  get name() {
    console.log('side effect');
    return 'George';
  }
};
obj.name;