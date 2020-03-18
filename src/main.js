import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from "./components/Home";
import News from "./components/News";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  // declaring the routes here
  // for the small amount of routes
  // there are makes more sense to me
  routes: [
    {
      path: '/',
      // redirects to /home from /
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      name: 'Home'
    },
    {
      path: '/home/news',
      component: News,
      name: 'News'
    }
  ],
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
