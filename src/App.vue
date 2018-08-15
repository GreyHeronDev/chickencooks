

<template>
	<div id="app">

		<router-link to="/foo">Go to Foo</router-link>
		<router-link to="/bar">Go to Bar</router-link>
		<router-view></router-view>

		<Header siteTitle="Курица Cooks!"/>
		<Navigation v-bind:navItems="navItems" />
		<MainSearch />
		<Footer />
			
	</div>
</template>


<!-- --------------------SCRIPTS----------------------- -->

<script>


	import Header from './components/header.vue'
	import Navigation from './components/navigation.vue'
	import MainSearch from './components/mainSearch.vue'
	import Footer from './components/footer.vue'



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
			MainSearch,
			Footer
		}
	}

</script>

<!-- --------------------STYLES----------------------- -->

<style lang="scss">

	@import "./styles/libs/bootstrap.css";
	@import "~stylesPath/_global.scss";

</style>
