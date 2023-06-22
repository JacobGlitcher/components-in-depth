<script setup>
defineProps(['firstMessage'])
defineEmits(['update:firstMessage'])
</script>

<template>
  <input
      :value="firstMessage"
      @input="$emit('update:firstMessage', $event.target.value)"
  />
</template>
