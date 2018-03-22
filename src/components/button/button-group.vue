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
<style lang="scss">
@import '../../styles/variables.scss';
.#{$--clsPrefix}-button-group {
  position: relative;
  display: inline-block;
}
.#{$--clsPrefix}-button-group--horizontal {
  .#{$--clsPrefix}-button:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .#{$--clsPrefix}-button:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-right: -1px;
  }
}

.#{$--clsPrefix}-button-group--vertical {
  .#{$--clsPrefix}-button {
    display: block;
  }
  .#{$--clsPrefix}-button:not(:first-child) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .#{$--clsPrefix}-button:not(:last-child) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    margin-bottom: -1px;
  }
}
</style>
