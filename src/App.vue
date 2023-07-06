<script setup>
import SimpleSlotParent from "./components/simple-slots/SimpleSlotParent.vue";
</script>

<template>
  <div>
    <h1>Here are some examples of v-model implementation</h1>

    <div class="components-wrapper">
      <p>Simple slots</p>
      <SimpleSlotParent/>
    </div>
  </div>
</template>

<style scoped>
.components-wrapper {
  margin-bottom: 25px;
}
</style>
