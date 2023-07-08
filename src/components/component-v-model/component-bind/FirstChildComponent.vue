<script setup>
defineProps(["firstMessage", "firstSubMessageMessage"]);
defineEmits(["update:firstMessage", "update:firstSubMessageMessage"]);
</script>

<template>
  <div>
    <input
        :value="firstMessage"
        @input="$emit('update:firstMessage', $event.target.value)"
    /> {{ firstMessage }}
  </div>

  <div>
    <input
        :value="firstSubMessageMessage"
        @input="$emit('update:firstSubMessageMessage', $event.target.value)"
    /> {{ firstSubMessageMessage }}
  </div>
</template>
