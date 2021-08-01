import { createApp } from "vue";
import router from "./router";
import App from "./views/app";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import './style/index.less';

const app = createApp(App).use(router).use(ElementPlus).mount('#app')