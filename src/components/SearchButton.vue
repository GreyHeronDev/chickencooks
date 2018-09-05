<template>
    <div class="is-component is-search-button button-wrap">
        <router-link v-bind:to="{name: 'search-results'}">
            <input class="is-button is-search-button" type="button" :value='this.text' v-on:click='this.clickOn' />
        </router-link>

        <!-- If search button is rendered through router, it doesn't trigger the search functionality - TODO -->
        <!-- <router-link v-bind:to="{name: 'search-results'}" tag="button" class="is-button is-search-button btn submit-btn" v-on:click=this.clickOn > Search router</router-link>  -->
    </div>
</template>

<script>

    import Generics from 'vue-innersearch/src/lib/Generics';
    import { Component } from 'vue-innersearch/src/lib/Enums.js';

    export default {
        name : 'search-button',
        mixins : [Generics],

        props : {
            // text : set the text into the input button
            "text" : {
                type : String,
                default : "Search"
            }
        },

        data : function() {
            return {
                CID : undefined
            }
        },

        methods : {
            clickOn : function() {
                // Execute request

                this.fetch();
            }
        },

        created : function() {
			// Interactive component declaration
            this.CID = this.addComponent(Component.SEARCH_BUTTON, this);
        }
    };
</script>