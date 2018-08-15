
<template>
	<div id="search-block">
		
		<div id="search-module" data-module="recipeSearch">
				
			<div class="container">
			
				<div class="col-xs-12">
				
					<form class="main-search-form">
						
						<div class="inputCont">
							<label for="main-search-field">Find a recipe</label>
							<input type="text" name="main-search-field" id="main-search-field" v-model="searchcriteria" placeholder="ingredient, diet, name..."/>
							
							<button id="submitBtn" type="submit" class="btn" v-on:click.prevent="searchRecipes(searchcriteria)">Search</button>
						</div>
						
					</form>
				
				</div>
				
			</div>
			
		</div>
		
		<SearchResults v-bind = "{searchResponse:searchResponse}" v-if = "searchResponse.length"></SearchResults>

		<DetailPage v-bind="{dishDetailsObj:dishDetailsObj}"></DetailPage>
		
	</div>
</template>

<script>

	import SearchResults from './searchResults.vue'
	import DetailPage from './detailPage.vue'

	export default {
		name: 'MainSearch',
		
		components: {
			SearchResults,
			DetailPage
		},
		
		data: function () {
				return {
					searchcriteria: "",
					searchResponse: [],
					dishDetailsObj: {}
				}
		},

		methods: {
			searchRecipes: function(data) {
				
				var self = this;
				var xhttp = new XMLHttpRequest();
				
				xhttp.open("GET", "src/JSON/dishes.json", true);
				xhttp.send();
				
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
						self.searchResponse = JSON.parse(this.responseText);
				   }
				};
			}
		
		}
	}

</script>



<style lang="scss">

	@import "~stylesPath/_mainSearch.scss";

</style>
