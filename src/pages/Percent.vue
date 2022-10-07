<template>
  <q-page class="flex flex-center">
    <div
      style="
        height: 100%;
        background: red;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      "
    >
      <div>100% 시작</div>
      <q-input label="keyboard" />
      <div>100% 끝</div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "percent"
}
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
}

#q-app {
  height: 100%;
}

.q-page-container {
  height: 100%;
}

.q-layout {
  min-height: unset;
  height: 100%;
}

.q-page {
  min-height: unset;
  height: 100%;
}
</style>
