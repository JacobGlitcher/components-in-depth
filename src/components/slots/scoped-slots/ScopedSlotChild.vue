<script setup>
const greeting = "Hi There!";
const count = 1;
</script>

<template>
  <div>
    <slot name="first-paragraph" :count="count"></slot>
    <slot :msg="greeting" :count="count"></slot>
    <slot name="third-paragraph" :count="count"></slot>
  </div>
</template>

<style scoped>
</style>
