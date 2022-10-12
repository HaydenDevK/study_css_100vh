<template>
  <q-page class="flex flex-center">
    <div>
      <button @click='alert("alert")'>Alert</button>
      <input label="keyboard" id="inputt"/>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "alertKeyboard",
  methods: {
    alert (message) {
      event.preventDefault()
      document.activeElement.blur()
      setTimeout(() => {
        alert('hi')
      }, 100)
    }
  }
}
</script>

<style>
[data-notify] {
  z-index: 9999 !important;
}
</style>
