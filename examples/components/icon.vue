<template lang='pug'>
  .icon-example
    h2 icon组件
    xl-icon(type='clock',:size='1')
    xl-icon(type='locked',:size='1',color='#c2c2c2')
    xl-icon(type='ionic',:size='2',color='#409eff')
</template>
<script>
export default {
}
</script>
<style lang="scss">
.icon-example{
  .xl-icon{
    margin: 0.5em
  }
}
</style>
