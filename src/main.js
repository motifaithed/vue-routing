import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

const router = createRouter({
    history: createWebHistory(), //to identify web history
    routes: []
})

const app = createApp(App)

app.mount('#app');
