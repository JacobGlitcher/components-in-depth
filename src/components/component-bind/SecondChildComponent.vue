<script setup>
import { computed } from 'vue'

const props = defineProps(['secondMessage'])
const emit = defineEmits(['update:secondMessage'])

const value = computed({
  get() {
    return props.secondMessage
  },
  set(value) {
    emit('update:secondMessage', value)
  }
})
</script>

<template>
  <input v-model="value" />
</template>
