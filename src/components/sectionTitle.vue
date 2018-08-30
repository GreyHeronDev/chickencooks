
<template>
	<div class="section-title-wrap">

			<div class="row">
				
				<div class="col-xs-12">
					<h2 class="sectionTitle">{{sectionTitle}}</h2>	
				</div>

			</div>
	</div>
	
	
</template>

<script>

	export default {
		name: 'SectionTitle',

		props: {
			sectionTitle: {
				type: String,
				required: true
			}
		},
	}

</script>



<style lang="scss">

	@import "~stylesPath/_sectionTitle.scss";

</style>
