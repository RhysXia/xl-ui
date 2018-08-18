<template lang="pug">
    div(:class="classes")
      slot
</template>
<script>
import Icon from '../icon'
const name = 'xl-sider'
export default {
  name,
  inject: ['xlLayout'],
  computed: {
    classes() {
      return name
    }
  },
  mounted() {
    this.xlLayout.hasSider = true
  },
  beforeDestroy() {
    this.xlLayout.hasSider = false
  },
  components: {
    Icon
  }
}
</script>
