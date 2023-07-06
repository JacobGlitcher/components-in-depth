<script setup>
import { ref } from "vue"

import FirstChildComponent from "./FirstChildComponent.vue";
import SecondChildComponent from "./SecondChildComponent.vue";

const firstMessage = ref("")
const firstSubMessageMessage = ref("")
const secondMessage = ref("")
</script>

<template>
  <div>
    <p>simple component v-model</p>
    <FirstChildComponent
        v-model:firstMessage="firstMessage"
        v-model:firstSubMessageMessage="firstSubMessageMessage"
    />
  </div>
  <div>
    <p>getter setter component v-model</p>
    <SecondChildComponent v-model:secondMessage.uppercase="secondMessage"/> {{ secondMessage }}
  </div>
</template>

<style scoped>
</style>
