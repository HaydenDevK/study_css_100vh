<template>
    <div
      style="
        width: 100vw;
        height: calc(var(--vh, 1vh) * 100);
        min-height: 509px;
        padding: 0px 24px 121px 24px;
        display: grid;
        align-content: center;
        overflow: auto;
        position: relative;
        background-color: red;
      "
    >
      <div style="
        width: 100%;
        height: 100%;
        background-color: white;
        display: grid;
        grid-template-rows: 88px 300px;
      ">
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
          <q-input label="keyboard" />
        </div>
      </div>
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
  name: "test5",
  mounted () {
    this.setScreenSize()
    window.addEventListener('resize', () => this.setScreenSize())
  },
  methods: {
    setScreenSize () {
      setTimeout(() => {
        const vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
      }, 100)
    }
  }
}
</script>

<style scoped></style>
