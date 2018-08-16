

<template>
	<div id="detail-page">
			
		<div class="container">
		
			<div class="row">
				
				<div class="col-xs-12">
					<h3 class="sectionTitle"> {{dishDetailsObj.name}} </h3>
					
				</div>
				
			</div>
		
			<div class="row">
		
				<div class="col-xs-12">
				
					<div class="detail-item-wrap">
						
						
					
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
				dishDetailsObj: {}
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
						self.dishDetailsObj = JSON.parse(this.responseText);
				    }
				};
			}
		}
	}

</script>



<style lang="scss">

	

</style>
