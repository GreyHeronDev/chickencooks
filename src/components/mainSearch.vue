
<template>
	<div id="search-block">
		
		<div id="search-module" data-module="recipeSearch">
				
			<div class="container">
			
				<div class="col-xs-12">
				
					<form class="main-search-form">
						
						<div class="inputCont">
							<label for="main-search-field">Find a recipe</label>
							<input type="text" name="main-search-field" id="main-search-field" v-model="searchcriteria" placeholder="ingredient, diet, name..."/>
							
							<router-link v-bind:to="{name: 'search-results', params: {searchcriteria: searchcriteria}}" tag="button" class=" btn submitBtn"> Search </router-link>
						</div>
						
					</form>
				
				</div>
				
			</div>
			
		</div>

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
					searchcriteria: ""
				}
		}
	}

</script>



<style lang="scss">

	@import "~stylesPath/_mainSearch.scss";

</style>
