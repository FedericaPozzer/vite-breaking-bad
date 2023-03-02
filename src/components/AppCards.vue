<script>
import SingleCard from "./SingleCard.vue"
import { store } from "../data/store"

export default {
    data() {
        return {
            store
        }
    },

    components: {
        SingleCard,
    }
}

</script>


<template>

    <SingleCard

        v-for="card in store.cards"
        :key="card.name"
        :image="card.card_images"
        :name="card.name"
        :type="card.type"
    > 
    </SingleCard>

</template>


<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.card {
    width: 100% !important;
    height: 100%;
}
.card-body {
    background-color: $bg-orange;

    .card-title {
        color: $c-white;
    }
}

</style>