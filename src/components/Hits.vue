<template>
    <section v-if="hits.score != undefined" class="is-component is-hits">
        <slot name="hits" v-bind:hits="hits">

            <div id="search-results">
                <div class="transparent-overlay"></div>
                    <slot name="section-title"></slot>

                    <div class="row">
                        <div class="col-xs-12">
                            <div class="is-score is-hits">
                                <strong v-if="hits.score === 0">No result found</strong>
                                <strong v-else-if="hits.score === 1">1 result found</strong>
                                <strong v-else-if="hits.score > 1">{{ hits.score }} results found</strong>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-12">
                            <div class="result-item-wrap" v-bind:key=item._source.id v-for="item in hits.items">
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

                                            <ul v-for="diet in item._source.diets" v-bind:key="diet.id">
                                                <li class="diet-type-text"> {{ diet }} </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                        </div>
                    </div>
                </div>				
            </div>

        </slot>
    </section>
</template>

<script>
    import Generics from 'vue-innersearch/src/lib/Generics';
    import { Component } from 'vue-innersearch/src/lib/Enums.js';

    export default {
        name : "hits",
        mixins : [Generics],

        data : function() {
            return {
                CID : undefined
            }
        },

        computed : {
            hits : function() {
                return {
                    items : this.items,
                    score : this.score
                };
            }
        },

        methods : {
            emptyHits : function() {
                this.clearItems();
                this.setScore(undefined);
            }
        },

        created : function() {
            // Interactive component declaration
            this.CID = this.addComponent(Component.HITS, this);

            this.bus.$on('emptyHits', () => {
                this.emptyHits();
            });
        }
    };
</script>