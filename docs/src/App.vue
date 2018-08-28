<template lang='pug'>
  xl-layout
    xl-header
      Header
    xl-layout
      xl-aside
      xl-content
    xl-footer
    //- .container
    //-   xl-row(type='flex',:gutter="20")
    //-     xl-col(:span="4")
    //-       SideNav
    //-     xl-col.content(:span="20")
    //-       keep-alive
    //-         router-view
</template>

<script>
import SideNav from './components/side-nav'
import Header from './components/header'
export default {
  name: 'App',
  metaInfo: {
    script: [
      {
        type: 'text/javascript',
        src: 'https://hm.baidu.com/hm.js?54ab865ac74959c54237d33393eee05d'
      }
    ]
  },
  components: {
    SideNav,
    Header
  }
}
</script>
<style lang="scss">
@import './style/index';
.app {
  .container {
    width: 1450px;
    margin: 0 auto;
    background: #fff;
    padding: 1em;
  }
}
</style>
