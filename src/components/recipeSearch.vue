
<template>
	<div>
		<searchbox :field="['name', 'diets', 'method']" :operator="'OR'" :placeholder="'name, diet, ingredient...'">
		</searchbox>
		<search-button></search-button>
		<hits>
			 <template slot="hits" slot-scope="{ hits }">
				 <div id="search-results">
					<div class="transparent-overlay"></div>
						<SectionTitle v-bind:sectionTitle="sectionTitle" />
						<div class="row">
							<div class="col-xs-12">
				 	 			<div class="result-item-wrap" v-bind:key=item._source.id v-for="item in hits.items" :item="item">
                   					 <div class="row">
										<div class="col-xs-12 col-md-6">
											<div class="recipe-photo">
												<img v-bind:src="item._source.image" class="recipe-thumb" />
											</div>
										</div>
								   
									<div class="col-xs-12 col-md-6">
										<div class="recipe-summary-wrap">
											<h3 class="recipe-title">
												<a href=""> {{item._source.name}} </a>
											</h3>
											<div class="recipe-summary">
												{{ item._source.summary }}
											</div>
											<div class="diet-type">
												<span class="diet-type-title"> Diet type: </span>
												<span class="diet-type-text"> {{ item._source.diets }} </span>	
											</div>
										</div>
									</div>
								</div>
					
							</div>
						</div>
					</div>				
				</div>
			 </template>
		</hits>
	</div>
</template>

<script>

	import Vue from 'vue'; // needed to tell JS which function to use
	// import for innerSearch
	import {SearchButton, Searchbox, Hits, Generics} from 'vue-innersearch/src/innerSearch';

	export default {
		name: 'RecipeSearch',
		

		created : function () {
			// ES server configuration
			this.setHost('http://localhost:9200');
			this.setIndex('chicken');
			this.setType('recipe');
		},

		components : {
			Searchbox,
			SearchButton, 
			Hits,
			Generics
		}
		
	}

</script>


<style lang="scss">


</style>
