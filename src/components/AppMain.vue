<script>
import AppCards from "./AppCards.vue"

export default {
    components : { AppCards }
}

</script>


<template>
    <div class="bg">
        
        <div class="container py-3">
            <div class="form">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Alien</option>
                    <option value="1">Yu</option>
                    <option value="2">Gi</option>
                    <option value="3">Boh</option>
                </select>
            </div>

            <div class="cards-container mt-3 p-5">

                <div class="found p-3"> Found 39 cards </div>

                <div class="cards row row-cols-6">

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

    // debug
    height: $main-height;
}

.form {
    max-width: 20%;
    height: $header-height;
}

.cards-container {
    background-color: $bg-white;

    .found {
        background-color: $bg-black;
        color: $c-white;
    }
}

</style>