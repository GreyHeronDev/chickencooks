

<template>

	<div class="container">
		<div id="app">

			<Header />
			<Navigation v-bind:navItems="navItems" />

			<router-view name="home"></router-view>
			<router-view name="searchResults"></router-view>
			<router-view name="details"></router-view>

			<Footer />
			
			<TestSearch/>
				
		</div>
	</div>
</template>


<!-- --------------------SCRIPTS----------------------- -->

<script>


	import Header from './components/header.vue'
	import Navigation from './components/navigation.vue'
	import Footer from './components/footer.vue'
	
	// Test
	import TestSearch from './components/testSearch.vue'

	export default {
		name: 'app',
		
		data:  function () {
			return {
				navItems: [
				  { id : 'item1', text: 'Mains' },
				  { id : 'item2', text: 'Salads' },
				  { id : 'item3', text: 'Desserts' }
				]
			}

		},
		
		components: {
			Header,
			Navigation,
			Footer,
			TestSearch
		}
	}

</script>

<!-- --------------------STYLES----------------------- -->

<style lang="scss">

	@import "./styles/libs/bootstrap.css";
	@import "~stylesPath/_global.scss";

</style>
