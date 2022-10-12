<template>
  <q-page class="flex flex-center">
    <div>
      <button @click='alert("alert")'>Alert</button>
      <q-input label="keyboard" />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "alertKeyboard",
  methods: {
    alert (message) {
      alert(message)
    }
  }
}
</script>

<style>
[data-notify] {
  z-index: 9999 !important;
}
</style>
