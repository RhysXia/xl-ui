<template lang='pug'>
  div#app
    Grid
    Icon
    Button
    ButtonGroup
</template>

<script>
import Grid from './components/grid'
import Icon from './components/icon'
import Button from './components/button'
import ButtonGroup from './components/button-group'
export default {
  name: 'App',
  components: {
    Grid,
    Icon,
    Button,
    ButtonGroup
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
