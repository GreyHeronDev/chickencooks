
<template>
	
	<div id="navigation-module">
			
		<div class="container">
			<div class="row">
				<ul class="col-xs-12 topLevel">
				
				
					<li class="col-sm-4 col-xs-12 topLevelLi" v-for="item in navItems" v-bind:key="item.id"> 
						
						<div class="hoverWrap">
							<a href="#" class="navTitle">{{ item.text }}</a>
						</div>
						
					</li> 
	

				</ul>
			</div>
		</div>

	</div>

</template>




<script>


	export default {
		name: 'Navigation',
		
		props: {
			navItems: {
				type: Array,
				required: true
			}
		}
	}
</script>


<style lang="scss">
	
	@import "~stylesPath/_navigation.scss";

</style>
