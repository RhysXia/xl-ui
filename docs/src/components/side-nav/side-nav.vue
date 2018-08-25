<template lang="pug">
    .side-nav
      Node(:menus="menus")
</template>
<script>
import menus from '@docs/menus'
import Node from './node'
export default {
  data() {
    return {
      menus
    }
  },
  computed: {
    routes() {
      return this.$router.options.routes.filter(it => it.meta)
    }
  },
  components: {
    Node
  }
}
</script>
<style lang="scss">
@import '@docs/style/var.scss';

.side-nav{
  margin: 0 0.5em;
  border-right: 1px solid $--border-color;
}
</style>
