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
    divided: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      const arr = [name]
      if (this.divided) {
        arr.push(`${name}--divided`)
      }
      if (this.disabled) {
        arr.push(`${name}--disabled`)
      } else if (this.selected) {
        arr.push(`${name}--selected`)
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
