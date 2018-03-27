<template lang="pug">
  label(:class='radioClasses')
    input(type='radio',:name='groupName',:class='inputClasses',@focus='_focusHandler',@blur='_blurHandler',:checked='currentValue',@change='_changeHandler',:disabled="disabled",:readonly='readonly')
    span(:class='innerClasses')
    span(:class='labelClasses',v-if='label||($slots&&$slots.default)')
      slot {{label}}
</template>
<script>
const name = 'xl-radio'
export default {
  name,
  inject: {
    xlRadioGroup: {
      default: null
    }
  },
  model: {
    prop: 'value',
    event: 'on-change'
  },
  props: {
    label: [String, Number],
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    name: String,
    border: Boolean
  },
  data() {
    return {
      currentValue: false,
      focused: false
    }
  },
  computed: {
    radioClasses() {
      const arr = [`${name}`]
      if (this.currentValue) {
        arr.push(`${name}--checked`)
      }
      if (this.focused) {
        arr.push(`${name}--focused`)
      }
      if (this.disabled) {
        arr.push(`${name}--disabled`)
      }
      if (this.readonly) {
        arr.push(`${name}--readonly`)
      }
      if (this.border) {
        arr.push(`${name}--border`)
      }
      return arr
    },
    innerClasses() {
      const arr = [`${name}__inner`]
      return arr
    },
    inputClasses() {
      const arr = [`${name}__input`]
      return arr
    },
    labelClasses() {
      const arr = [`${name}__label`]
      return arr
    },
    isGroup() {
      return !!this.xlRadioGroup
    },
    groupName() {
      return this.isGroup ? this.xlRadioGroup.groupName : this.name
    }
  },
  watch: {
    value(val) {
      if (this.isGroup) {
        return
      }
      this.currentValue = val === this.trueValue
    },
    currentValue(val) {
      if (this.isGroup) {
        if (val) {
          // value不存在时或者为false时使用label
          this.xlRadioGroup.currentValue = this.value || this.label
        }
        return
      }
      const value = val ? this.trueValue : this.falseValue
      this.$emit('on-change', value)
    },
    'xlRadioGroup.currentValue'(val) {
      if (this.value) {
        this.currentValue = val === this.value
      } else {
        this.currentValue = val === this.label
      }
    }
  },
  methods: {
    _changeHandler(e) {
      this.currentValue = e.target.checked
    },
    _focusHandler(e) {
      this.focused = true
      this.$emit('on-focus', e)
    },
    _blurHandler(e) {
      this.focused = false
      this.$emit('on-blur', e)
    }
  },
  mounted() {
    if (this.isGroup) {
      this.currentValue = this.value
        ? this.xlRadioGroup.currentValue === this.value
        : this.xlRadioGroup.currentValue === this.label
    } else {
      this.currentValue = this.value === this.trueValue
    }
  }
}
</script>
<style lang="scss">
@import '../../styles/variables.scss';

.#{$--clsPrefix}-radio {
  position: relative;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  vertical-align: middle;
  line-height: 1;
  transition: all $--transition-time ease-in-out;
  &__input {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 1;
    box-sizing: border-box;
    cursor: pointer;
  }
  &__inner {
    position: relative;
    display: inline-block;
    left: 0;
    top: 0;
    width: $--radio-size;
    height: $--radio-size;
    border: 1px solid $--color-border;
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    transition: all $--transition-time ease-in-out;
    &:after {
      display: block;
      content: '';
      background-color: $--radio-color-active;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      transition: all $--transition-time ease-in-out;
      transform: scale(0);
    }
  }
  &__label {
    padding-left: 0.3em;
  }
}

.#{$--clsPrefix}-radio--border {
  border: 1px solid $--color-border;
  padding: 0.4em 0.6em;
  border-radius: $--border-radius;
  &.#{$--clsPrefix}-radio--checked {
    border-color: $--radio-color-active;
  }
  &.#{$--clsPrefix}-radio--focused {
    box-shadow: $--box-shadow-size
      rgba($--radio-color-active, $--box-shadow-transparency);
    .#{$--clsPrefix}-radio__inner {
      box-shadow: none;
    }
  }
}

.#{$--clsPrefix}-radio--disabled {
  opacity: $--disabled-opacity;
  .#{$--clsPrefix}-radio__input {
    cursor: not-allowed;
  }
}
.#{$--clsPrefix}-radio--readonly {
  pointer-events: none;
  // opacity: $--disabled-opacity;
}

.#{$--clsPrefix}-radio--focused {
  .#{$--clsPrefix}-radio__inner {
    box-shadow: $--box-shadow-size
      rgba($--radio-color-active, $--box-shadow-transparency);
  }
}

.#{$--clsPrefix}-radio--checked {
  .#{$--clsPrefix}-radio__inner {
    border-color: $--radio-color-active;
    &:after {
      transform: scale(0.7);
    }
  }
  .#{$--clsPrefix}-radio__label {
    color: $--radio-color-active;
  }
}
</style>
