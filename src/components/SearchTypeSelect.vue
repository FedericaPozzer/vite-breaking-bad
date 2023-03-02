<script>
import { store } from "../data/store"


export default {
    data() {
        return {
            store,
            researchedType : "",
        }
    },

    emits : ["invio-dati"]
}

</script>

 <!-- onchange="$emit('invio-dati')" -->
<template>

    <div class="form" @submit.prevent="$emit('invio-dati')">
        <select class="form-select" aria-label="Default select example" v-model="researchedType" onchange="if (this.researchedType) submit()">
            <option v-for=" type in store.cardsTypes"> {{ type }} </option>
        </select>
    </div>

</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.form {
    max-width: 30%;
    height: $header-height;
}
</style>