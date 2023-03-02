<script>
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"

import axios from "axios"

import { store } from "./data/store"

export default {
  data() {
    return {
      store,

    }
  },

  created() {
    axios
      .get(store.endpoint)
      .then((response) => {
        console.log(response);
        store.cards = response.data.data
      })
  },
  
  components : {
    AppHeader, AppMain
  },
 
}

</script>

<template>
  <AppHeader></AppHeader>

  <AppMain></AppMain>
</template>

<style>

</style>
