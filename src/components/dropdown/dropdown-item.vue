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
<style lang="scss">
@import '../../styles/variables.scss';
.#{$--clsPrefix}-dropdown-item {
  padding: 0.5em 1em;
  cursor: pointer;
  color: $--dropdown-color;
  &:hover {
    color: $--dropdown-color--active;
  }
  // .#{$--clsPrefix}-dropdown {
  //   margin: -0.5em -1em;
  //   padding: 0.5em 1em;
  // }
}
.#{$--clsPrefix}-dropdown-item--disabled {
  opacity: $--disabled-opacity;
  cursor: not-allowed;
  &:hover {
    color: $--dropdown-color;
  }
}
</style>
