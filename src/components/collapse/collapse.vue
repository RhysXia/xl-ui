<template lang="pug">
    div(:class="classes")
      slot
</template>
<script>
const name = 'xl-collapse'
export default {
  name,
  model: {
    prop: 'value',
    event: 'on-change'
  },
  provide() {
    return {
      xlCollapse: this
    }
  },
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Array, Number]
    },
    simple: {
      type: Boolean,
      default: false
    },
    hideArrow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeIndex: this.value
    }
  },
  watch: {
    value(val) {
      this.activeIndex = val
    },
    activeIndex(val) {
      this.$emit('on-change', val)
    }
  },
  computed: {
    classes() {
      const arr = [name]
      if (this.simple) {
        arr.push(`${name}--simple`)
      }
      return arr
    }
  }
}
</script>
