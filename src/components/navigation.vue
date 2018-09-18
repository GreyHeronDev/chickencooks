
<template>
	
	<div id="navigation-module">
			
	
			<div class="row">
				<ul class="col-xs-12 topLevel">
				
				
					<li class="col-sm-4 col-xs-12 topLevelLi" v-for="item in navItems" v-bind:key="item.id"> 

						<div class="hoverWrap">
							<router-link v-bind:to="{name: 'search-results', params: {searchcriteria: {type: item.text}}, query: {type: item.text}}" class="navTitle"> {{ item.text }} </router-link>
						</div>

						
					</li> 
	

				</ul>
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
