<script>
import LocalComponentGamma from "./LocalComponentGamma.vue";

export default {
  components: {
    LocalComponentGamma
  }
}
</script>

<template>
  <div>
    <p>
      This is the local component Beta inside component Alpha and due to the usage of options API
      we must register the component Gamma to use it
    </p>
    <LocalComponentGamma/>
  </div>
</template>

<style scoped>
</style>
