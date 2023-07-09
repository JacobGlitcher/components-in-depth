<script setup>
import { computed, defineAsyncComponent, ref } from "vue";
import AsyncComponentError from "./AsyncComponentError.vue";

const AsyncComponentChild = defineAsyncComponent({
  loader: () => import("./AsyncComponentChild.vue"),
  errorComponent: AsyncComponentError,
})

const show = ref(false);

const getButtonMsg = computed(() => {
  return show.value ? "Hide" : "Show";
});
</script>

<template>
  <div>
    <button @click="show = !show">{{ getButtonMsg }}</button>
    <AsyncComponentChild v-if="show"/>
  </div>
</template>

<style scoped>
</style>
