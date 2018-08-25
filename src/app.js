import Vue from 'vue'
import VueRouter from 'vue-router'
import InnerSearch from 'vue-innersearch/src/innerSearch'

// import components
import App from './App.vue'

Vue.config.productionTip = false;

// Vue usages
Vue.use(VueRouter);
Vue.use(InnerSearch);

import routes from './router/router.js'
  
  const router = new VueRouter({
	mode: 'history',
	routes: routes
  })


new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
