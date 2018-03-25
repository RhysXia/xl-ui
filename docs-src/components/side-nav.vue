<template lang="pug">
    ul.menu-list
        li(v-for="(route,index) in routes",:key="index")
            router-link(:to="route.path") {{route.meta}}
</template>
<script>
export default {
  computed: {
    routes() {
      return this.$router.options.routes.filter(it => it.meta)
    }
  }
}
</script>
<style lang="scss">
@import '../../src/styles/variables.scss';
.menu-list {
  border-right: 1px solid $--color-border;
  list-style: none;
  margin: 0 1em 0 0;
  padding: 0;
  height: 100%;
  a {
    display: block;
    padding: 0.5em;
    text-decoration: none;
    color: $--color-text;
    font-size: 1.1em;
    margin: 0.5em 0;
    &:hover,
    &.router-link-active {
      color: $--color-primary;
    }
  }
}
</style>
