<template lang="pug">
    div(:class="classes")
      slot
</template>
<script>
const name = 'xl-layout'
export default {
  name,
  provide() {
    return {
      xlLayout: this
    }
  },
  data() {
    return {
      hasSider: false
    }
  },
  computed: {
    classes() {
      const arr = [name]
      if (this.hasSider) {
        arr.push(`${name}--sider`)
      }
      return arr
    }
  }
}
</script>
