<template lang='pug'>
  div#app
    Grid
    Icon
    Button
</template>

<script>
import Grid from './components/grid'
import Icon from './components/icon'
import Button from './components/button'
export default {
  name: 'App',
  components: {
    Grid,
    Icon,
    Button
  }
}
</script>
<style lang="scss">
#app{
  >*{
    margin-bottom: 20px;
  }
}
</style>
