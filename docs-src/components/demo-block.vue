<template lang="pug">
  .demo-block
    .demo-source
      slot(name='source')
    .demo-desc
      slot
    .demo-code
      slot(name="highlight")
</template>
<script>
export default {
  name: 'demo-block',
  mounted() {
    console.log(this)
  }
}
</script>
<style lang="scss">

</style>
