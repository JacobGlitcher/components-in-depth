<script setup>
import LocalComponentAlpha from "./components/registration/local-component/LocalComponentAlpha.vue";
import SimpleBind from "./components/component-v-model/simple-bind/SimpleBind.vue"
import ParentComponent from "./components/component-v-model/component-bind/ParentComponent.vue"
import SimpleSlotParent from "./components/slots/simple-slots/SimpleSlotParent.vue";
import FallbackParent from "./components/slots/fallback/FallbackParent.vue";
import NamedSlotParent from "./components/slots/named-slots/NamedSlotParent.vue";
import ScopedSlotParent from "./components/slots/scoped-slots/ScopedSlotParent.vue";
import ProvideInjectParent from "./components/provide-inject/ProvideInjectParent.vue";
import AsyncComponentParent from "./components/async-components/AsyncComponentParent.vue";
</script>

<template>
  <div>
    <div class="main-wrapper">
      <h2>Here are some examples of Global and Local Components</h2>

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
      <h2>Here are some examples of V-Model implementation</h2>

      <div class="components-wrapper">
        <h3>encapsulated v-model</h3>
        <SimpleBind/>
      </div>

      <div class="components-wrapper">
        <h3>component v-model</h3>
        <ParentComponent/>
      </div>
    </div>

    <hr>

    <div class="main-wrapper">
      <h2>Here are some examples of Slots implementation</h2>

      <div class="components-wrapper">
        <h3>simple slots</h3>
        <SimpleSlotParent/>
      </div>

      <div class="components-wrapper">
        <h3>fallback content in slots</h3>
        <FallbackParent/>
      </div>

      <div class="components-wrapper">
        <h3>named slots examples</h3>
        <NamedSlotParent/>
      </div>

      <div class="components-wrapper">
        <h3>scoped slots examples</h3>
        <ScopedSlotParent/>
      </div>
    </div>

    <hr>

    <div class="main-wrapper">
      <h2>Here are some examples of Provide/Inject implementation</h2>

      <div class="components-wrapper">
        <h3>working with reactivity and changing the value from descendant</h3>
        <ProvideInjectParent/>
      </div>
    </div>

    <div class="main-wrapper">
      <h2>Here are some examples of Async Components implementation</h2>

      <div class="components-wrapper">
        <h3>async component example</h3>
        <AsyncComponentParent/>
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
