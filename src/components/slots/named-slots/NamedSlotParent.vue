<script setup>
import NamedSlotChild from "./NamedSlotChild.vue"
</script>

<template>
  <div>
    <NamedSlotChild>
      <template v-slot:first-paragraph>
        <p>This one will be first-paragraph slot</p>
      </template>

      <p>This one will be default slot</p>

      <template #third-paragraph>
        <p>This one will be third-paragraph slot</p>
      </template>
    </NamedSlotChild>
  </div>
</template>

<style scoped>
</style>
