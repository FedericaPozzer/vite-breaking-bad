<script>
import { store } from "../data/store"

export default {
    data() {
        return {
            store
        }
    }
}

</script>


<template>

    <div class="col" v-for="card in store.cards">
        <div class="card" v-for="img in card.card_images">
          <img :src="img.image_url" class="card-img-top" alt="YGO">
          <div class="card-body text-center">
            <h5 class="card-title"> {{ card.name }} </h5>
            <p class="card-text"> {{ card.archetype }} </p>
          </div>
        </div>
    </div>

</template>


<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.card {
    width: 100% !important;
}
.card-body {
    background-color: $bg-orange;

    .card-title {
        color: $c-white;
    }
}

</style>