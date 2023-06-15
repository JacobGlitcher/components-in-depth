<script setup>
import { ref } from "vue"

import FirstChildComponent from "./FirstChildComponent.vue";
import SecondChildComponent from "./SecondChildComponent.vue";

const firstMessage = ref("")
const secondMessage = ref("")
</script>

<template>
  <div>
    <h3>simple component v-model</h3>
    <FirstChildComponent v-model="firstMessage"/> {{ firstMessage }}
  </div>
  <div>
    <h3>getter setter component v-model</h3>
    <SecondChildComponent v-model="secondMessage"/> {{ secondMessage }}
  </div>
</template>

<style scoped>
</style>
