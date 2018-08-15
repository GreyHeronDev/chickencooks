import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'



Vue.config.productionTip = false;
Vue.use(VueRouter);

import Foo from './components/Foo.vue'
const Bar = { template: '<div>bar</div>' }


const routes = [
	{ path: '/foo', component: Foo },
	{ path: '/bar', component: Bar }
  ]

  
  const router = new VueRouter({
	mode: 'history',
	routes // short for `routes: routes`
  })




new Vue({
	router: router,
	render: h => h(App)
}).$mount('#app')
