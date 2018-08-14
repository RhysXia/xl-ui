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
  metaInfo: {
    script: [
      {
        type: 'text/javascript',
        innerHTML: `var _hmt = _hmt || [];
                    (function() {
                      var hm = document.createElement("script");
                      hm.src = "https://hm.baidu.com/hm.js?54ab865ac74959c54237d33393eee05d";
                      var s = document.getElementsByTagName("script")[0]; 
                      s.parentNode.insertBefore(hm, s);
                    })();`
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
