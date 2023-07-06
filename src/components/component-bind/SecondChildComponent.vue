<script setup>
import { computed } from 'vue'

const props = defineProps(['secondMessage', 'secondMessageModifiers'])
const emit = defineEmits(['update:secondMessage'])

const value = computed({
  get() {
    return props.secondMessage
  },
  set(value) {
    if (props.secondMessageModifiers.uppercase) {
      value = value.toUpperCase()
    }
    emit('update:secondMessage', value)
  }
})
</script>

<template>
  <input v-model="value" />
</template>
