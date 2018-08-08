<template lang='pug'>
  #app
    Header
    xl-row.container(type='flex')
      xl-col(:span="4")
        SideNav
      xl-col.content(:span="20")
        keep-alive
          router-view
</template>

<script>
import SideNav from './components/side-nav'
import Header from './components/header'
export default {
  name: 'App',
  components: {
    SideNav,
    Header
  }
}
</script>
<style lang="scss">
@import './style/base.scss';
#app {
  .container {
    width: 1450px;
    margin: 0 auto;
    background: #fff;
    padding: 1em;
  }
}
</style>
