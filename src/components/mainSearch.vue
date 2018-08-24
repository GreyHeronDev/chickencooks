
<template>
	<div id="search-block">
		
		<div id="search-module" data-module="recipeSearch">
				
			<div class="container">
			
				<div class="col-xs-12">
				
					<form class="main-search-form">
						
						<div class="inputCont">
							<label for="main-search-field">Find a recipe</label>
							<input type="text" name="main-search-field" id="main-search-field" v-model="searchcriteria" placeholder="ingredient, diet, name..."/>
							
							<router-link v-bind:to="{name: 'search-results', params: {searchcriteria: searchcriteria}, query: {lookfor: searchcriteria}}" tag="button" class=" btn submitBtn"> Search </router-link>
						</div>
						
					</form>
				
				</div>
				
			</div>
			
		</div>

	</div>
</template>

<script>

	export default {
		name: 'MainSearch',
		
		data: function () {
				return {
					searchcriteria: ""
				}
		},

		methods: {
			
		},

		created: function () {
			// set search value to the query string on navigating back (or server-side page load)
			if ( this.$route.query.lookfor ) {
				this.searchcriteria = this.$route.query.lookfor
			}
		}
	}

</script>



<style lang="scss">

	@import "~stylesPath/_mainSearch.scss";

</style>
