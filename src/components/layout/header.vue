<template lang="pug">
    div(:class="classes")
      slot
</template>
<script>
const name = 'xl-header'
export default {
  name,
  props: {
    // fixed: {
    //   type: Boolean,
    //   default: false
    // }
  },
  computed: {
    classes() {
      const arr = [name]
      // if (this.fixed) {
      //   arr.push(`${name}--fixed`)
      // }
      return arr
    }
  }
}
</script>
