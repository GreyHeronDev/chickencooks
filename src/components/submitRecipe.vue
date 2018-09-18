

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

					<div class="input-wrap">
						<label for="recipe-method"> How to cook </label>
						<textarea name="recipe-method" />
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
