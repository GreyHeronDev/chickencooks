

<template>
	<div id="detail-page">
			<div class="transparent-overlay"></div>
		
			<div class="row">
				
				<div class="col-xs-12">
					<h2 class="sectionTitle"> {{dishDetails.name}} </h2>
					
				</div>
				
			</div>
		
			<div class="row">
		
				<div class="col-xs-12">
					
					<div class="recipe-wrap">
						
						<div class="row">
							<div class=" col-xs-6">
								<h3 class="paragraph-title">Ingredients</h3>
								<ul class="ingredient-list">
									<li v-for="(item, index) in dishDetails.ingredients" v-bind:key="index"> 
										{{ item }}
									</li> 
								</ul>
							</div>

							<div class="col-xs-6">
								<img class="recipe-image" v-bind:src="dishDetails.img" alt="" />
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

	export default {
		name: 'DetailPage',

		data: function () {
			return {
				dishDetails: {}
			}
		},

		created: function() {
			this.goToDetailPage(this.$route.params.itemID);
		},

		watch: {
			// call again the method if the route changes
			'$route': 'goToDetailPage'
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
