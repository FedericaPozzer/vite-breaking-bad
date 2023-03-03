<script>
import { store } from "../data/store"


export default {
    data() {
        return {
            store,
            researchedType : "",
        }
    },

    emits: ["invio-dati"],

    methods : {
        selectedType() {
            this.$emit("invio-dati", this.researchedType);
        }
    },
}

</script>

<template>

    <div class="form" @submit.prevent="">
        <select class="form-select" aria-label="Default select example" v-model="researchedType" @change="if (this.researchedType) selectedType();">
            <option v-for="cardType in store.cardsTypes"> {{ cardType }} </option>
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