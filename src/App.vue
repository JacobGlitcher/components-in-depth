<script setup>
import LocalComponentAlpha from "./components/local-component/LocalComponentAlpha.vue";
import SimpleBind from './components/simple-bind/SimpleBind.vue'
import ParentComponent from './components/component-bind/ParentComponent.vue'
</script>

<template>
  <div>
    <div class="main-wrapper">
      <h2>Here are some examples of Global and Local components</h2>

      <div class="components-wrapper">
        <h3>Global Components</h3>
        <GlobalComponentAlpha/>
      </div>

      <div class="components-wrapper">
        <h3>Local Components</h3>
        <LocalComponentAlpha/>
      </div>
    </div>

    <hr>

    <div class="main-wrapper">
      <h2>Here are some examples of v-model implementation</h2>

      <div class="components-wrapper">
        <h3>encapsulated v-model</h3>
        <SimpleBind/>
      </div>

      <div class="components-wrapper">
        <h3>component v-model</h3>
        <ParentComponent/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-wrapper {
  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.35rem;
  }

  .components-wrapper {
    margin-bottom: 25px;
  }
}

hr {
  margin: 45px 0;
}
</style>
