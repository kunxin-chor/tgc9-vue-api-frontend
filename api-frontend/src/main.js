import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';


// import in all my pages
import Faults from './components/Faults';
import Page2 from './components/Page2';

Vue.config.productionTip = false;

const routes = [
    {
        path:'/faults', component: Faults
    },
    {
        path:'/page2', component: Page2
    }
]

const router = new VueRouter({
    routes
})

Vue.use(VueRouter);

new Vue({
  router
}).$mount('#app')
