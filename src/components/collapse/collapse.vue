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
    event: 'on-input'
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
      this.$emit('on-input', val)
    }
  },
  computed: {
    classes() {
      const arr = [name]
      return arr
    }
  }
}
</script>
