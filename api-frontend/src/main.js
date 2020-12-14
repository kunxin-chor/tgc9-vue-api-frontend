import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';


// import in all my pages
import Faults from './components/Faults';
import AddFault from './components/AddFault';
import Page2 from './components/Page2';
import EditFault from './components/EditFault'

Vue.config.productionTip = false;

// define routers
const routes = [
    {
        path:'/faults', component: Faults
    },
    {
        path:'/page2', component: Page2
    },
    {
        path:'/faults/add', component: AddFault
    },
    {
        path: '/faults/:id/edit', component: EditFault
    }
]

// create the router
const router = new VueRouter({
    routes
})

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
