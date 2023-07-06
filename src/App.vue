<script setup>
import LocalComponentAlpha from "./components/local/LocalComponentAlpha.vue";
</script>

<template>
  <div>
    <h2>Here are some examples of Global and Local components</h2>

    <div class="components-wrapper">
      <h2>Global Components</h2>
      <GlobalComponentAlpha/>
    </div>

    <div class="components-wrapper">
      <h2>Local Components</h2>
      <LocalComponentAlpha/>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1.8rem;
}

h2 {
  font-size: 1.35rem;
}

.components-wrapper {
  margin-bottom: 25px;
}
</style>
