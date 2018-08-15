
import DetailPage from '../components/detailPage.vue'
const Bar = { template: '<div>bar</div>' }


const routes = [
	{ 
		path: '/details', 
		name: "details",
		component: DetailPage, 
		props: true 
	},

	{ path: '/bar', component: Bar }
]
	

export default routes
