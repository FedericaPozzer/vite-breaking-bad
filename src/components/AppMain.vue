<script>
import SearchTypeSelect from "./SearchTypeSelect.vue"
import AppCards from "./AppCards.vue"

import { store } from "../data/store"


export default {
    components : { SearchTypeSelect, AppCards },

    data() {
        return {
            store,
        }
    },
}

</script>

 <!-- v-for="type in store.cardsTypes" -->

<template>
    <div class="bg">
        
        <div class="container py-3">
            
            <SearchTypeSelect 
                v-for="(type, i) in store.cardsTypes"
                :key="type[i]"
                :type="type"
            ></SearchTypeSelect>
            

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