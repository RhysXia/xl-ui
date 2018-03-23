<template lang='pug'>
  div#app
    Grid
    Icon
    Button
    ButtonGroup
    Input
</template>

<script>
import Grid from './components/grid'
import Icon from './components/icon'
import Button from './components/button'
import ButtonGroup from './components/button-group'
import Input from './components/input'
export default {
  name: 'App',
  components: {
    Grid,
    Icon,
    Button,
    ButtonGroup,
    Input
  }
}
</script>
<style lang="scss">
#app {
  > * {
    margin-bottom: 20px;
  }
}
</style>
