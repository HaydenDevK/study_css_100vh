<template>
  <q-page class='flex flex-center'>
    <div
      style='
        height: calc(var(--vh, 1vh) * 100);
        background: blue;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      '
    >
      <div>100vh 시작</div>
      <q-input label='keyboard' />
      <div>100vh 끝</div>
    </div>
  </q-page>
</template>

<script>
function setScreenSize () {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}
window.addEventListener('resize', () => setScreenSize())

export default {
  name: 'vhLikePercent',
  mounted () {
    this.setScreenSize()
  },
  methods: {
    setScreenSize () {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
  }
}
</script>
