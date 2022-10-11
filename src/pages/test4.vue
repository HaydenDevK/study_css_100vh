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
      >
        popup
        <button @click="setUnLockScroll">UnLock</button>
        <button @click="setLockScroll">Lock</button>
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
    setTimeout(() => {
      this.setLockScroll()
    }, 3000)
  },
  methods: {
    setLockScroll () {
      this.scrollPosition = window.pageYOffset
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${this.scrollPosition}px`
      document.body.style.width = '100%'
    },
    setUnLockScroll () {
      document.body.style.removeProperty('overflow')
      document.body.style.removeProperty('position')
      document.body.style.removeProperty('top')
      document.body.style.removeProperty('width')
      window.scrollTo(0, this.scrollPosition)
    }
  }
}
</script>

<style scoped></style>
