<template lang="pug">
  ul.node
    li(v-for="(menu, index) in actualMenus",:key="index")
      template(v-if="menu.children")
        h2.title
          xl-icon(v-if="menu.icon",:type="menu.icon")
          span.title__inner {{menu.title}}
        div.sub-node
          xl-node(:menus="menu.children")
      template(v-else)
        router-link(:to="menu.path")
          h2.title
            xl-icon(v-if="menu.icon",:type="menu.icon")
            span.title__inner {{menu.title}}
</template>

<script>
export default {
  name: 'xl-node',
  props: {
    menus: Array
  },
  computed: {
    actualMenus() {
      return this.menus.filter(it => it.title)
    }
  }
}
</script>
<style lang="scss">
@import "@docs/style/var";
.node {
  list-style: none;
  margin-left: 0;
  padding: 0;
  margin: 0.5em 0;
  a {
    display: block;
    text-decoration: none;
    transition: all .4s ease-in-out;
    margin: 1em 0;
    &:hover,
    &.router-link-active {
      .title{
        color: $--link-color;
      }
    }
    &.router-link-active{
      background-color: lighten($--link-color, 30%);
      border-right: 2px solid $--link-color;
    }
  }
  .title {
    transition: all .4s ease-in-out;
    font-size: 1em;
    font-weight: normal;
    margin: 0;
    padding: 0.5em;
    color: $--text-color-dark;
    .xl-icon + .title__inner{
      padding-left: 0.5em;
    }
  }
}

.sub-node{
    .node{
      a{
        padding-left: 1em;
      }
    }
  }
</style>
