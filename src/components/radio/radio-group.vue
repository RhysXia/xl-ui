<template lang="pug">
  div(:class='classes')
    slot
</template>
<script>
const name = 'xl-radio-group'

let i = 0

const generateGrouName = () => {
  return `${name}-group-name${i++}`
}

export default {
  name,
  provide() {
    return {
      xlRadioGroup: this
    }
  },
  model: {
    prop: 'value',
    event: 'on-change'
  },
  props: {
    value: [String, Number, Boolean],
    type: {
      validator(val) {
        return ['button'].includes(val)
      }
    }
  },
  data() {
    return {
      currentValue: this.value,
      groupName: generateGrouName()
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    },
    currentValue(val) {
      this.$emit('on-change', val)
    }
  },
  computed: {
    classes() {
      const arr = [name]
      if (this.type) {
        arr.push(`${name}--${this.type}`)
      }
      return arr
    }
  }
}
</script>
<style lang="scss">
@import '../../styles/variables.scss';
@import '../../styles/utils.scss';
.#{$--clsPrefix}-radio-group {
  position: relative;
  @include clearfix;
  .#{$--clsPrefix}-radio:not(:last-child) {
    margin-right: 0.5em;
  }
}
.#{$--clsPrefix}-radio-group--button {
  .#{$--clsPrefix}-radio {
    float: left;
    border: 1px solid $--color-border;
    padding: 0.4em 0.6em;
    margin-right: 0 !important;
    text-align: center;
    &:first-child {
      border-top-left-radius: $--border-radius;
      border-bottom-left-radius: $--border-radius;
    }
    &:last-child {
      border-top-right-radius: $--border-radius;
      border-bottom-right-radius: $--border-radius;
    }
    &:not(:first-child) {
      margin-left: -1px;
    }
    .#{$--clsPrefix}-radio__inner {
      display: none;
    }
    .#{$--clsPrefix}-radio__label {
      transition: all $--transition-time ease-in-out;
      padding-left: 0;
    }
  }
  .#{$--clsPrefix}-radio--checked {
    border-color: $--radio-color-active;
    background-color: $--radio-color-active;
    .#{$--clsPrefix}-radio__label {
      color: $--radio-color-text-active;
    }
  }
  .#{$--clsPrefix}-radio--focused {
    box-shadow: $--box-shadow-size
      rgba($--radio-color-active, $--box-shadow-transparency);
  }
}
</style>
