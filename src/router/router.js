
import MainSearch from '../components/mainSearch.vue'
import DetailPage from '../components/detailPage.vue'
import SearchResults from '../components/searchResults.vue'


const routes = [
	{	
		path: '/',
		name: 'home',
		components: {
			home: MainSearch
		}
	},

	{
		path: '/search',
		name: 'search-results',
		components: {
			home: MainSearch,
			searchResults: SearchResults
		}
	},

	{ 
		path: '/details', 
		name: "details",
		append: "true",
		components: {
			details: DetailPage
		},
		props: true 
	}
]
	

export default routes
