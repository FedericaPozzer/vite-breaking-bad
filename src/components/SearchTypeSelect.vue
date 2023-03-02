<script>
// import { store } from "../data/store"


export default {
     props: {
        type: String,
    }
   
}

</script>


<template>

    <div class="form">
        <select class="form-select" aria-label="Default select example">
            <option value="1"> {{ type }} </option>
            <!-- <option value="2">Gi</option> -->
            <!-- <option value="3">Boh</option> -->
        </select>
    </div>

</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.form {
    max-width: 20%;
    height: $header-height;
}
</style>