<template>
    <div
      style="
        width: 100vw;
        height: 100vh;
        background-color: red;
        padding: 0 24px;
        grid-template-rows: 1fr max-content 1fr 94px;
        position: fixed;
        top: 0;
        z-index: 99999;
        overflow: auto;
        display: grid;
        place-items: center;
      "
    >
      <div style="width: 100%; height: 100%; background-color: white;"></div>
      <div
        style="
          width: 100%;
          height: 100%;
          background-color: pink;
        "
      >
        <div style="width: 100%; background-color: yellow;">title</div>
        <div
          style="
            width: 100%;
            background-color: blue;
          "
        >
          <q-input label="keyboard" />
          <q-input label="keyboard" />
          <q-input label="keyboard" />
          <q-input label="keyboard" />
        </div>
      </div>
      <div style="width: 100%; height: 100%; background-color: white;"></div>
      <div></div>
      <button
        style="
          position: fixed;
          bottom: 0;
          left: 0;
          padding: 0 24px 20px 24px;
          width: 100%;
          height: 94px;
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
