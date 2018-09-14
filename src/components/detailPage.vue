

<template>
	<div id="detail-page">
			<div class="transparent-overlay"></div>
		
			<SectionTitle v-bind:sectionTitle=dishDetails.name />
		
			<div class="row">
		
				<div class="col-xs-12">
					
					<div class="recipe-wrap">
						
						<div class="row">
							<div class=" col-xs-6">
								<h3 class="paragraph-title">Ingredients</h3>
								<ul class="ingredient-list">
									<li v-for="(ingredientListItem, index) in dishDetails.ingredients" v-bind:key="index"> 
										<span class="ingredient-name"> {{ingredientListItem.ingredient}} </span>
										<span class="ingredient-name"> {{ingredientListItem.quantity}} </span>
										<span class="ingredient-name"> {{ingredientListItem.unit_measure}} </span>
									</li> 
								</ul>
							</div>

							<div class="col-xs-6">
								<img class="recipe-image" v-bind:src="dishDetails.image" alt="" />
							</div>
						</div>

						<div class="row">
							<div class="col-xs-12">
								<h3 class="paragraph-title">Method</h3>
								<div class="recipe-text col-xs-12">
									{{dishDetails.method}}
								</div>
							</div>
						</div>

					</div>

				</div>
			
			</div>

	</div>
	
	
</template>

<script>

	import SectionTitle from './sectionTitle.vue'

	export default {
		name: 'DetailPage',

		components: {
			SectionTitle
		},

		data: function () {
			return {
				dishDetails: this.$route.params.dishDetails
			}
		},

		created: function() {
			//this.goToDetailPage(this.$route.params.itemID);
		},

		watch: {
			// call again the method if the route changes
			//'$route': 'goToDetailPage'
		},

		methods: {
			goToDetailPage: function(itemID) {
				var self = this;
				var xhttp = new XMLHttpRequest();
				
				xhttp.open("GET", "src/JSON/dish-id-" + itemID + ".json", true);
				xhttp.send();
				
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
						self.dishDetails = JSON.parse(this.responseText);
				    }
				};
			}
		}
	}

</script>



<style lang="scss">

	@import "~stylesPath/_detailPage.scss";

</style>
