<template lang="pug">
  div(:class="classes")
    slot
</template>
<script>
const name = 'xl-checkbox-group'

let i = 0

const generateGrouName = () => {
  return `${name}-name${i++}`
}

export default {
  name,
  model: {
    prop: 'value',
    event: 'on-change'
  },
  provide() {
    return {
      xlCheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      validator(val) {
        return ['button'].includes(val)
      }
    },
    name: {
      type: String,
      default: generateGrouName
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  watch: {
    currentValue(val) {
      this.$emit('on-change', val)
    },
    value(val) {
      this.currentValue = val
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
.#{$--clsPrefix}-checkbox-group {
  .#{$--clsPrefix}-checkbox:not(:last-child) {
    margin-right: 0.5em;
  }
}

.#{$--clsPrefix}-checkbox-group--button {
  @include clearfix;
  .#{$--clsPrefix}-checkbox {
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
    .#{$--clsPrefix}-checkbox__inner {
      display: none;
    }
    .#{$--clsPrefix}-checkbox__label {
      transition: all $--transition-time ease-in-out;
      padding-left: 0;
    }
  }
  .#{$--clsPrefix}-checkbox--checked {
    border-color: $--checkbox-color-active;
    border-right-color: $--checkbox-color-bg;
    background-color: $--checkbox-color-active;
    .#{$--clsPrefix}-checkbox__label {
      color: $--checkbox-color-text-active;
    }
  }

  .#{$--clsPrefix}-checkbox--checked + .#{$--clsPrefix}-checkbox--checked {
    border-left-color: $--checkbox-color-bg;
  }

  // .#{$--clsPrefix}-checkbox--focused {
  //   box-shadow: $--box-shadow-size rgba($--checkbox-color-active, $--box-shadow-transparency);
  // }
}
</style>
