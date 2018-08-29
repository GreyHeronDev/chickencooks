
<template>
	
		<div id="search-module">
			<div class="transparent-overlay"></div>
				
			<div class="row">
			
				<div class="col-xs-12">
				
					<form class="main-search-form">
						
						<div class="inputCont">
							<label for="main-search-field">Find a recipe</label>
							<input type="text" name="main-search-field" id="main-search-field" v-model="searchcriteria" placeholder="ingredient, diet, name..."/>
							
							<router-link v-bind:to="{name: 'search-results', params: {searchcriteria: {lookfor: searchcriteria}}, query: {lookfor: searchcriteria}}" tag="button" class=" btn submitBtn"> Search </router-link>
						</div>
						
					</form>
				
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

		created: function () {
			// set search value to the query string on navigating back (or server-side page load)
			if ( this.$route.query.lookfor ) {
				this.searchcriteria = this.$route.query.lookfor
			}
		},

		watch: {
			// call this method if the route changes
			'$route': 'resetInput'
		},


		methods: {

			// clear input if there is no relevant param in the url
			resetInput: function() {
				if ( !this.$route.query.lookfor ) {
					this.searchcriteria = ""
				}
			}
		}
		
	}

</script>



<style lang="scss">

	@import "~stylesPath/_mainSearch.scss";

</style>
