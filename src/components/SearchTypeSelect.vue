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

<!-- $emit('invio-dati') -->
 <!-- onchange="$emit('invio-dati')" -->
<template>

    <div class="form" @submit.prevent="">
        <select class="form-select" aria-label="Default select example" v-model="researchedType" onchange="if (this.researchedType) selectedType();">
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