
<template>
	<div>
		<search-datalist :id="'searchdatalist'" :realtime="true" :field="'method'" :suggestion="['name', 'method']">
			<template slot="items" slot-scope="{ item }">
				{{ item._source.name }} {{ item._source.method }} (<strong>{{ item._source.name }}</strong>)
			</template>

			<template slot="nosuggestion" slot-scope="{ value }">
				Sorry, "{{ value }}" doesn't exist... :(
			</template>

			<template slot="suggestions" slot-scope="{ suggestion }">
				<span v-html="suggestion.highlight.name ? suggestion.highlight.name[0] : suggestion._source.name"></span>
				<span v-html="suggestion.highlight.method ? suggestion.highlight.method[0] : suggestion._source.method"></span>
			</template>
		</search-datalist>
	</div>
</template>

<script>

	import Vue from 'vue'; // needed to tell JS which function to use
	// import for innerSearch
	import {Searchbox ,SearchDatalist, Generics} from 'vue-innersearch/src/innerSearch';
	  
	// register the components
	Vue.component('searchbox', Searchbox);
	Vue.component('search-datalist', SearchDatalist);
	Vue.mixin(Generics);

	export default {
		name: 'TestSearch',
		

		created : function () {
			// ES server configuration
			this.setHost('http://localhost:9200');
			this.setIndex('chicken');
			this.setType('recipe');
		},

		components : {
			Searchbox, 
			Generics
		}
		
	}

</script>


<style lang="scss">


</style>
