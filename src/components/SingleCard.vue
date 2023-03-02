<script>
export default {
    props : {
        image: String,
        name: String,
        type: String,
    }
}

</script>


<template>

    <div class="col gy-2">
        <div class="card">
            <img :src="image[0].image_url" class="card-img-top" alt="YGO">

            <div class="card-body text-center d-flex flex-column justify-content-between">
                <h5 class="card-title"> {{ name }} </h5>
                <p class="card-text"> {{ type }} </p>
            </div>
        </div>
    </div>



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