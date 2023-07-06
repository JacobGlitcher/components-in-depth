<script setup>
import { ref } from "vue";

const firstMessage = ref("")
const secondMessage = ref("")
</script>

<template>
<div>
  <div>
    <input :value="firstMessage" @input="firstMessage = $event.target.value"> <span>{{ firstMessage }}</span>
  </div>
  <div>
    <input v-model="secondMessage"> <span>{{ secondMessage }}</span>
  </div>
</div>
</template>

<style scoped>
</style>
