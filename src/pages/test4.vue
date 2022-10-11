<template>
    <div
      style="
        background-color: red;
        position: relative;
        width: 100vw;
        height: 100vh;
      "
    >
      scroll
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      scroll
      <div style="
        background: rgba(255, 255, 255, 0.4);
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        text-align: center;
      "
      > popup
      </div>
    </div>
</template>

<script>
export default {
  name: "test1",
  data () {
    return {
      scrollPosition: 0
    }
  },
  mounted () {
    this.setScroll()
  },
  methods: {
    setScroll () {
      this.scrollPosition = window.pageYOffset
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${this.scrollPosition}px`
      document.body.style.width = '100%'
    }
  }
}
</script>

<style scoped></style>
