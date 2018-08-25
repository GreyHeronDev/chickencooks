
<template>
	<div id="search-results">
			
		<div class="container">
		
			<div class="row">
				
				<div class="col-xs-12">
					<h2 class="sectionTitle">Search Results</h2>
					
				</div>
				
			</div>
		
			<div class="row" v-if="searchResponse !== 0">
		
				<div class="col-xs-12">
				
					<div class="result-item-wrap" v-for="item in searchResponse" v-bind:key="item.id">
						<div class="row">
							<div class="col-xs-12 col-md-6">
								<div class="recipe-photo">
									<img v-bind:src="item.img" class="recipe-thumb" />
								</div>
							</div>
							
							
							<div class="col-xs-12 col-md-6">
							
								<div class="recipe-summary-wrap">
									<h3 class="recipe-title">
										<router-link v-bind:to="{name: 'details', params: {itemID: item.id}, query: {recipe: item.name}}"> {{ item.name}} </router-link>
									</h3>
									
									<div class="recipe-summary">
										{{ item.summary }}
									</div>
									
									<div class="diet-type">
										<span class="diet-type-title"> Diet type: </span>

										<span class="diet-type-text"> {{ item.diet }} </span>	
									</div>
								
								</div>
							</div>
						</div>
					
					</div>

				</div>
			
			</div>

			<div class="notFound" v-else>
				No results found
			</div>
			
		</div>
		
	</div>
	
	
</template>

<script>

	export default {
		name: 'searchResults',

		data: function () {
			return {
				searchResponse: []
			}
		},

		created: function() {
			this.searchRecipes(this.$route.params.searchcriteria);
		},


		methods: {
			searchRecipes: function(searchData) {
				
				var self = this;
				var xhttp = new XMLHttpRequest();
				
				// object to query
				// https://stackoverflow.com/a/35416293
				console.log(Object.keys(searchData).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(searchData[k])}`).join('&'));

				xhttp.open("GET", "src/JSON/dishes.json", true);
				xhttp.send();
				
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
						self.searchResponse = JSON.parse(this.responseText);
				    } else {
						self.searchResponse = 0;
				    }
				};
			}
		}

	}

</script>



<style lang="scss">

	@import "~stylesPath/_searchResults.scss";

</style>
