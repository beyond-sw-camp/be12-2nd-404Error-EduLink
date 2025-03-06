import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import axios from 'axios';
import 'flowbite';
import 'vue-cal/dist/vuecal.css';

//백엔드 주소 설정
axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router)

app.mount("#app")