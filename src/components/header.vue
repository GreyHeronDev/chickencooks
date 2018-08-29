
<template>
	<div id="header-module">
			
			<div class="row">
				
				<div class="col-xs-12">
					<h1 id="siteTitle">
						<router-link v-bind:to="{name: 'home'}">
							<span class="script-font">Курица</span>
							<span class="round-font">cooks!</span>
						</router-link>
					</h1>					
				</div>
			</div>


	</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    siteTitle: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

@import "../styles/modules/_header.scss";

</style>
