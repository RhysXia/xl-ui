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
  data() {
    return {
      prefixCls: name
    }
  },
  computed: {
    classes() {
      const arr = [this.prefixCls]
      if (this.vertical) {
        arr.push(`${this.prefixCls}--vertical`)
      } else {
        arr.push(`${this.prefixCls}--horizontal`)
      }
      return arr
    }
  }
}
</script>
