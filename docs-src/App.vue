<template lang='pug'>
  #app
    header
      a.logo(href="https://github.com/RhysXia/xl-vision") xl vision
    xl-row
      xl-col(:span="3")
        ul.menu-list
          li
            router-link(to="/button") button
      xl-col.content(:span="21")
        keep-alive
          router-view
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
body {
  font-size: 14px;
}
.hljs{
  line-height: 1.8;
  font-size: 1em;
}
#app {
  .menu-list {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      a {
        display: inline-block;
        text-decoration: none;
        width: 100%;
        height: 3em;
        line-height: 3em;
        text-align: center;
        background-color: #fff;
        font-size: 1.2em;
        color: #333;
        &:hover,
        &:active {
          color: #0077ff;
        }
      }
    }
  }
}
.content {
  background: #fff;
}
</style>
