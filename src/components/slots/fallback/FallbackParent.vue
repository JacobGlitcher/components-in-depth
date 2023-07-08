<script setup>
import FallbackChild from "./FallbackChild.vue";
</script>

<template>
  <div>
    <FallbackChild/>

    <FallbackChild>This is an example of slot with provided argument</FallbackChild>
  </div>
</template>

<style scoped>
</style>
