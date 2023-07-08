<script setup>
import { inject } from "vue";

const { grandchildMessage, resetMessage } = inject("message");
const readonlyMessage = inject("readonlyMessage");
</script>

<template>
  <div>
    <p>message to grandchild: {{ grandchildMessage }}</p>
    <button @click="resetMessage">Click me to reset</button>
    <p>this one is readonly: {{ readonlyMessage }}</p>
  </div>
</template>

<style scoped>
</style>
