<template lang="pug">
  div(:class="classes",@click="_clickHandler")
    slot
</template>
<script>
const name = 'xl-dropdown-item'
export default {
  name,
  inject: ['xlDropdown'],
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      const arr = [name]
      if (this.disabled) {
        arr.push(`${name}--disabled`)
      }
      return arr
    }
  },
  methods: {
    _clickHandler(e) {
      if (this.disabled) {
        return
      }
      this.$emit('on-click', e)
      if (this.xlDropdown.trigger === 'custom') {
        return
      }
      if (this.xlDropdown && this.xlDropdown.hideOnClick) {
        this.xlDropdown.visiable = false
      }
    }
  }
}
</script>
