
import MainSearch from '../components/mainSearch.vue'
import DetailPage from '../components/detailPage.vue'
import SearchResults from '../components/searchResults.vue'
import RecipeSearch from '../components/recipeSearch.vue'


const routes = [
	{	
		path: '/',
		name: 'home',
		components: {
			home: RecipeSearch
		}
	},

	{
		path: '/search',
		name: 'search-results',
		components: {
			searchResults: RecipeSearch
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
