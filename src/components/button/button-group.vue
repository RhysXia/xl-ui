<template lang="pug">
  div(:class="classes")
    slot
</template>
<script>
const name = 'xl-button-group'
export default {
  name,
  props: {
    vertical: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      const arr = [name]
      if (this.vertical) {
        arr.push(`${name}--vertical`)
      } else {
        arr.push(`${name}--horizontal`)
      }
      return arr
    }
  }
}
</script>
