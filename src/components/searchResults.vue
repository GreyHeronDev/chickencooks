
<template>
	<div id="search-results">
			
		<div class="container">
		
			<div class="row">
				
				<div class="col-xs-12">
					<h3 class="sectionTitle">Search Results</h3>
					
				</div>
				
			</div>
		
			<div class="row">
		
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
										<a href="#" v-on:click.prevent="goToDetailPage(item.id)"> {{ item.name}} </a>
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
			
		</div>
		
	</div>
	
	
</template>

<script>

	export default {
		name: 'searchResults',

		data: function () {
			return {
				rendered: false
			}
		},
		
		props: {
			searchResponse: {
				type: Array,
				required: true
			}
		},

		methods: {
			goToDetailPage: function(itemID) {
				var self = this;
				var xhttp = new XMLHttpRequest();
				
				xhttp.open("GET", "src/JSON/dish-id-" + itemID + ".json", true);
				xhttp.send();
				
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
						self.$parent.dishDetailsObj = JSON.parse(this.responseText);
				    }
				};
			}
		}
	}

</script>



<style lang="scss">

	@import "~stylesPath/_searchResults.scss";

</style>
