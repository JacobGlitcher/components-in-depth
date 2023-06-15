<script setup>
import SimpleBind from './components/simple-bind/SimpleBind.vue'
import ParentComponent from './components/component-bind/ParentComponent.vue'
</script>

<template>
  <div>
    <h1>Here are some examples of v-model implementation</h1>

    <div class="components-wrapper">
      <h2>encapsulated v-model</h2>
      <SimpleBind/>
    </div>

    <div class="components-wrapper">
      <h2>component v-model</h2>
      <ParentComponent/>
    </div>
  </div>
</template>

<style scoped>
.components-wrapper {
  margin-bottom: 25px;
}
</style>
