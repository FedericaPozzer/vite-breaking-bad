<script>
import SearchTypeSelect from "./SearchTypeSelect.vue"
import AppCards from "./AppCards.vue"


import axios from "axios"
import { store } from "../data/store"
import { createDOMCompilerError } from "@vue/compiler-dom"


export default {
    components : { SearchTypeSelect, AppCards },

    data() {
        return {
            store,
        }
    },

    methods : {

        fetchCards(url) {
            store.isPageLoading = true;
            axios
                .get(url)
                .then((response) => {
                    console.log(response);
                    store.cards = response.data.data
                })
                // .catch((error) => {
                //     store.cards = [];
                //     console.error(error);
                // })
                // .finally(() => {
                //     store.isPageLoading = false
                // })

        },

        fetchSelectedType(researchedType) {
            console.log(researchedType); //siiiii *.*
            // console.log(`${store.endpoint}?type=${researchedType}`);

            this.fetchCards(`${store.endpoint}?type=${researchedType}`); // ah ok
        },
    },

    created() {
        this.fetchCards(store.endpoint);
    }
}



</script>

 <!-- v-for="type in store.cardsTypes" -->

<template>
    <div class="bg">
        
        <div class="container py-3">
            
            <SearchTypeSelect @invio-dati="fetchSelectedType"></SearchTypeSelect>
            

            <div class="cards-container p-5">

                <div class="found p-3"> Found 39 cards </div>

                <div class="cards row row-cols-5">

                    <AppCards></AppCards>

                </div>

            </div>
        </div>
</div>
</template>


<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.bg {
    background-color: $bg-orange;
}

// .form {
//     max-width: 20%;
//     height: $header-height;
// }

.cards-container {
    background-color: $bg-white;

    .found {
        background-color: $bg-black;
        color: $c-white;
    }
}

</style>