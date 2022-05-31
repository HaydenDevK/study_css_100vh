<template>
  <q-page class="flex flex-center">
    <div
      style="
        height: 100lvh;
        background: lightslategrey;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      "
    >
      <div>100dvh 시작</div>
      <q-input label="keyboard" />
      <div>100lvh 끝</div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'lvh'
}
</script>

<style scoped></style>
