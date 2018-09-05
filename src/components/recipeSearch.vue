
<template>
	<div>
		<div id="search-module">
			<div class="transparent-overlay"></div>
			
			<div class="row">	
				<div class="col-xs-12">
					<form class="main-search-form">		
						<div class="inputCont">
							<label for="main-search-field">Find a recipe</label>

							<div class="inner-input-cont">
								<searchbox :field="['name', 'diets', 'method']" :operator="'OR'" :placeholder="'name, diet, ingredient...'"> </searchbox>
								
								<search-button></search-button>
							</div>
						
						</div>
					</form>
				</div>
			</div>	
		</div>

		<hits>
			<SectionTitle v-bind:sectionTitle="sectionTitle" slot="section-title" />
		</hits>
		
	</div>
</template>

<script>
	
	import SectionTitle from './sectionTitle.vue';
	
	// import for innerSearch
	import Vue from 'vue'; // needed to tell JS which function to use

	// customised innersearch components
	import SearchButton from './SearchButton.vue';
	import Searchbox from './Searchbox.vue';
	import Hits from './Hits.vue';

	export default {
		name: 'RecipeSearch',
		
		data: function() {
			return {
				sectionTitle: "Search Results"
			}
		},

		created: function () {
			// ES server configuration
			this.setHost('http://localhost:9200');
			this.setIndex('chicken');
			this.setType('recipe');
		},

		components: {
			Searchbox,
			SearchButton, 
			Hits,
			SectionTitle
		}
		
	}

</script>


<style lang="scss">


</style>
