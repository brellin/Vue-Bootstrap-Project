import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from "./components/Home";
import News from "./components/News";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/home', component: Home },
  { path: '/news', component: News }
];

const router = new VueRouter({ routes });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
