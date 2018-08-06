<template lang="pug">
  header.header
    .header__wrapper
      a.logo(href='https://rhysxia.github.io/xl-vision')
        h1 xl-vision
      .right
        xl-button-group
          xl-button(@on-click='githubClick',icon='social-github')
</template>
<script>
export default {
  methods: {
    githubClick() {
      window.open('https://github.com/RhysXia/xl-vision')
    }
  }
}
</script>
<style lang="scss">
@import '../../../styles/theme-default/src/commons/variables.scss';
$header-height: 60px;
.header {
  position: sticky;
  top: 0;
  background-color: #fff;
  margin-bottom: 1em;
  z-index: 1;
  box-shadow: 0 0 0.5em $--color-border;
  min-width: 1250px;
  .header__wrapper {
    position: relative;
    min-width: 1250px - 40px;
    margin: 0 20px;
    height: $header-height;
  }
  .logo {
    position: relative;
    text-decoration: none;
    color: $--color-primary;
    h1 {
      display: inline-block;
      text-align: center;
      margin: 0;
      padding: 0;
      height: $header-height;
      line-height: $header-height;
    }
  }
  .right {
    position: relative;
    float: right;
    height: $header-height;
    display: table;
    > * {
      display: table-cell;
      vertical-align: middle;
    }
  }
}
</style>
