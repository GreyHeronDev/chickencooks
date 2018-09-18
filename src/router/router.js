
// import MainSearch from '../components/mainSearch.vue'
import DetailPage from '../components/detailPage.vue'
// import SearchResults from '../components/searchResults.vue'
import RecipeSearch from '../components/recipeSearch.vue'
import SubmitRecipe from '../components/submitRecipe.vue'


const routes = [
	{	
		path: '/',
		name: 'home',
		components: {
			default: RecipeSearch
		}
	},

	{
		path: '/search',
		name: 'search-results',
		components: {
			default: RecipeSearch
		}
	},

	{ 
		path: '/details', 
		name: "details",
		append: "true",
		components: {
			default: DetailPage
		}
	},

	{ 
		path: '/add', 
		name: "add-new-recipe",
		append: "true",
		components: {
			default: SubmitRecipe
		}
	}
]
	

export default routes
