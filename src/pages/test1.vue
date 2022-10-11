<template>
    <div
      style="
        width: 100vw;
        background-color: red;
        padding: 0 24px;
        grid-template-rows: 1fr 152px 464px 1fr 121px;
        position: relative;
        overflow: auto;
        display: grid;
        place-items: center;
        height: 100dvh;
        height: 100vh;
      "
    >
      <div style="width: 100%; height: 100%; background-color: white;"></div>
      <div style="width: 100%; height: 100%; background-color: yellow;">title</div>
      <div
        style="
          width: 100%;
          height: 100%;
          background-color: blue;
        "
      >
        <q-input label="keyboard" />
        <q-input label="keyboard" />
        <q-input label="keyboard" />
        <q-input label="keyboard" />
      </div>
      <div style="width: 100%; height: 100%; background-color: white;"></div>
      <button
        style="
          position: fixed;
          bottom: 0;
          left: 0;
          padding: 20px 24px;
          width: 100%;
          height: 121px;
          background-color: white;
          text-align: center;
          font-weight: 400;
          font-size: 13px;
          line-height: 21px;
          text-align: right;
          text-decoration: underline;
          color: black;
          border: 0;
          outline: 0;
          background-color: green;
          cursor: pointer;
        "
      >
        footer
      </button>
    </div>
</template>

<script>
export default {
  name: "test1"
}
</script>

<style scoped></style>
