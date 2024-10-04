import { createApp } from 'vue'
import App from './App.vue'
import 'animate.css'
import './style/index.scss'
import router from './router'
import store from './store'
import { Form, Field } from 'vant';
import 'vant/lib/index.css';
const app = createApp(App);

app.use(Field);
app.use(Form);
createApp(App).use(store).use(router).mount('#app')
