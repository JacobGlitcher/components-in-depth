<script setup>
import ScopedSlotChild from "./ScopedSlotChild.vue";
</script>

<template>
  <div>
    <ScopedSlotChild>
      <template #first-paragraph="{ count }">
        <p>This is my {{ count }}st greeting!</p>
      </template>

      <template #default="{ msg, count }">
        <p>{{ msg }} This is my {{ count + 1 }}nd greeting!</p>
      </template>

      <template #third-paragraph="{ msg, count }">
        <p>This is my {{ count + 2 }}rd greeting!</p>
      </template>
    </ScopedSlotChild>
  </div>
</template>

<style scoped>
</style>
