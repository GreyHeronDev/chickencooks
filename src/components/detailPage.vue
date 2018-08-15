

<template>
	<div id="detail-page">
			
		<div class="container">
		
			<div class="row">
				
				<div class="col-xs-12">
					<h3 class="sectionTitle"> {{ dishDetailsObj.name }} </h3>
					
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
				
			}
		},
		
		props: {
			dishDetailsObj: {
				type: Object,
				required: true
			}
		},

		methods: {
			
		}
	}

</script>



<style lang="scss">

	

</style>
