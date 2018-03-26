<template lang="pug">
  label(:class='wrapClasses')
    span(:class='radioClasses')
      span(:class="innerClasses")
      input(type='radio',:class='inputClasses')
    slot {{label}}
</template>
<script>
const name = 'xl-radio'
export default {
  name,
  props: {
    label: [String, Number]
  },
  computed: {
    wrapClasses() {
      const arr = [`${name}`]
      return arr
    },
    radioClasses() {
      const arr = [`${name}__wrapper`]
      return arr
    },
    innerClasses() {
      const arr = [`${name}__inner`]
      return arr
    },
    inputClasses() {
      const arr = [`${name}__input`]
      return arr
    }
  }
}
</script>
<style lang="scss">
@import '../../styles/variables.scss';

.#{$--clsPrefix}-radio {
  .#{$--clsPrefix}-radio__wrapper {
    position: relative;
    .#{$--clsPrefix}-radio__inner {
    }

    .#{$--clsPrefix}-radio__input {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 1;
      opacity: 0;
    }
  }
}
</style>
