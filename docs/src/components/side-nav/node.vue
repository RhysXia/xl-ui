<template lang="pug">
  ul.node
    li(v-for="(menu, index) in actualMenus",:key="index")
      router-link(:to="menu.path",v-if="menu.path")
        h2.title
          xl-icon(v-if="menu.icon",:type="menu.icon")
          span.title__inner {{menu.title}}
      h2.title(v-else)
        xl-icon(v-if="menu.icon",:type="menu.icon")
        span.title__inner {{menu.title}}
      div.sub-node(v-if="menu.children&&menu.children.length>0")
        xl-node(:menus="menu.children")
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
@import '@docs/style/var';
.node {
  list-style: none;
  margin-left: 0;
  padding: 0;
  margin: 0.5rem 0;
  a {
    display: block;
    text-decoration: none;
    transition: all 0.4s ease-in-out;
    margin: 1rem 0;
    &:hover,
    &.router-link-active {
      .title {
        color: $--link-color;
      }
    }
    &.router-link-active {
      background-color: lighten($--link-color, 30%);
      border-right: 2px solid $--link-color;
    }
  }
  .title {
    transition: all 0.4s ease-in-out;
    font-size: 0.9em;
    font-weight: normal;
    margin: 0;
    padding: 0.5rem 0;
    color: $--text-color-dark;
    .xl-icon + .title__inner {
      padding-left: 0.5rem;
    }
  }
}

.sub-node {
  .node {
    a {
      padding-left: 1rem;
    }
  }
}
</style>
