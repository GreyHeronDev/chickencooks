

<template>
	<div id="submit-recipe-module">
		<div class="transparent-overlay"></div>
		
		<SectionTitle v-bind:sectionTitle=pageTitle />

		<div class="row">	
			<div class="col-xs-12">
				<form class="new-recipe-form">
					<div class="input-wrap">
						<label for="recipe-title"> Recipe title </label>
						<input type="text" name="recipe-title" />
					</div>

					<div class="checkbox-group">
						
						<div class="input-group-title"> Type </div>
						
						<div class="row">
							<div class="col-xs-2">	
								<div class="input-wrap">	
									<input type="checkbox" name="type-main" id="type-main"/>
									<label for="type-main"> Main </label>
								</div>
							</div>
							
							<div class="col-xs-2">	
								<div class="input-wrap">
									<input type="checkbox" name="type-salad" id="type-salad"/>
									<label for="type-salad"> Salad </label>
								</div>
							</div>

							<div class="col-xs-2">	
								<div class="input-wrap">
									<input type="checkbox" name="type-soup" id="type-soup"/>
									<label for="type-soup"> Soup </label>	
								</div>
							</div>
							
							<div class="col-xs-2">	
								<div class="input-wrap">
									<input type="checkbox" name="type-dessert" id="type-dessert"/>
									<label for="type-dessert"> Dessert </label>	
								</div>
							</div>
							
							<div class="col-xs-2">	
								<div class="input-wrap">	
									<input type="checkbox" name="type-snack" id="type-snack"/>
									<label for="type-snack"> Snack </label>
								</div>
							</div>

						</div>
					</div>
					
					<div class="ingredients-input-group">
						<div class="input-group-title"> Ingredients </div>

						<div class="ingredient">
							<input type="text" name="ingredient-name" placeholder="name"/>
							<input type="text" name="ingredient-quantity" placeholder="quantity"/>

							<select name="ingredient-unit" >
								<option value="g">grams</option>
								<option value="kg">kilograms</option>
								<option value="piece">pieces</option>
							</select>
						</div>

					</div>

					<div class="input-wrap">
						<label for="recipe-method"> How to cook </label>
						<textarea name="recipe-method" />
					</div>

					<div class="checkbox-group">
						
						<div class="input-group-title"> Diets </div>
						
						<div class="row">
							<div class="col-xs-2">	
								<div class="input-wrap">	
									<input type="checkbox" name="diet-vegan" id="diet-vegan"/>
									<label for="diet-vegan"> Vegan </label>
								</div>
							</div>
							
							<div class="col-xs-2">	
								<div class="input-wrap">
									<input type="checkbox" name="diet-veg" id="diet-veg"/>
									<label for="diet-veg"> Vegetarian </label>
								</div>
							</div>

							<div class="col-xs-2">	
								<div class="input-wrap">
									<input type="checkbox" name="diet-gf" id="diet-gf"/>
									<label for="diet-gf"> Gluten Free </label>	
								</div>
							</div>

							<div class="col-xs-2">	
								<div class="input-wrap">
									<input type="checkbox" name="diet-raw" id="diet-raw"/>
									<label for="diet-raw"> Raw </label>	
								</div>
							</div>
						</div>
					</div>

				</form>
			</div>
		</div>

	</div>
	
	
</template>

<script>

	import SectionTitle from './sectionTitle.vue'

	export default {
		name: 'SubmitRecipe',

		components: {
			SectionTitle
		},

		data: function () {
			return {
				pageTitle: "Submit a new recipe"
			}
		}
	}

</script>



<style lang="scss">

	@import "~stylesPath/_recipeForm.scss";

</style>
