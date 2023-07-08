<script setup>
import ProvideInjectChild from "./ProvideInjectChild.vue";
import {provide, readonly, ref} from "vue";

const grandchildMessage = ref("Hello there!");
const readonlyMessage = ref("I am unchangeable");

function resetMessage() {
  grandchildMessage.value = '';
}

provide("message", {
  grandchildMessage,
  resetMessage
});

provide("readonlyMessage", readonly(readonlyMessage));
</script>

<template>
  <div>
    <input type="text" v-model="grandchildMessage">
    <ProvideInjectChild/>
  </div>
</template>

<style scoped>
</style>
