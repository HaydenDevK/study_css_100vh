<template>
    <div
      style="
        width: 100vw;
        height: 100vh;
        background-color: red;

        position: fixed;
        top: 0;
        z-index: 99999;

        display: grid;
        grid-template-rows: 1fr max-content 2fr 94px;
        place-items: center;
      "
    >
      <div style="background: #FFFFFF"></div>
      <div style="
        font-weight: 700;
        font-size: 20px;
        line-height: 32px;
        text-align: center;
        margin: 0;
        background-color: pink;
      ">
        리치고 MAS는
        <br />
        PC에서 사용가능합니다
      </div>
      <div style="background: #FFFFFF"></div>
      <div style="background: #FFFFFF"></div>
      <button style="
        width: 100%;
        height: 74px;
        padding: 0 24px 20px 24px;
        position: fixed;
        bottom: 0;
        background-color: green;
      ">
        확인
      </button>
    </div>
</template>

<script>
export default {
  name: "test3"
}
</script>

<style scoped></style>
