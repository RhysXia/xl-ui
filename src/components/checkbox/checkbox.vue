<template lang="pug">
  span(:class="checkboxClasses")
    input(type='checkbox',:class="inputClasses",:name="groupName",:disabled="disabled",:readonly="readonly",:checked="currentValue",@focus="_focusHandler",@blur="_blurHandler",@change="_changeHandler")
    span(:class="innerClasses")
    span(:class="labelClasses",v-if="label||($slots&&$slots.default)")
        slot {{label}}
</template>
<script>
const name = 'xl-checkbox'
export default {
  name,
  inject: {
    xlCheckboxGroup: {
      default: null
    }
  },
  model: {
    prop: 'value',
    event: 'on-change'
  },
  props: {
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
    label: String,
    border: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    name: String
  },
  data() {
    return {
      currentValue: false,
      focused: false
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
        // value不存在时或者为false时使用label
        const checked = this.value || this.label
        const value = this.xlCheckboxGroup.currentValue.filter(
          it => it !== checked
        )
        if (val) {
          value.push(checked)
        }
        this.xlCheckboxGroup.currentValue = value
        return
      }
      const value = val ? this.trueValue : this.falseValue
      this.$emit('on-change', value)
    },
    'xlCheckboxGroup.currentValue'(val) {
      this.currentValue = val.includes(this.value || this.label)
    }
  },
  computed: {
    checkboxClasses() {
      const arr = [name]
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
    inputClasses() {
      const arr = [`${name}__input`]
      return arr
    },
    innerClasses() {
      const arr = [`${name}__inner`]
      return arr
    },
    labelClasses() {
      const arr = [`${name}__label`]
      return arr
    },
    isGroup() {
      return !!this.xlCheckboxGroup
    },
    groupName() {
      return this.isGroup ? this.xlCheckboxGroup.name : this.name
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
  created() {
    if (this.isGroup) {
      this.currentValue = this.xlCheckboxGroup.currentValue.includes(
        this.value || this.label
      )
    } else {
      this.currentValue = this.value === this.trueValue
    }
  }
}
</script>
<style lang="scss">
@import '../../styles/variables.scss';
.#{$--clsPrefix}-checkbox {
  position: relative;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  vertical-align: middle;
  &__input {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    box-sizing: border-box;
    cursor: pointer;
    opacity: 0;
  }
  &__inner {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    left: 0;
    top: 0;
    height: $--checkbox-size;
    width: $--checkbox-size;
    border: 1px solid $--color-border;
    border-radius: $--border-radius;
    transition: all $--transition-time ease-in-out;
    &:after {
      position: absolute;
      content: '';
      border: 1px solid $--checkbox-color-bg;
      border-left: 0;
      border-top: 0;
      height: $--checkbox-size * 0.55;
      width: $--checkbox-size * 0.25;
      left: $--checkbox-size * 0.3;
      top: $--checkbox-size * 0.1;
      transform: rotate(45deg) scale(0);
      transform-origin: center;
      transition: transform $--transition-time ease-in-out;
    }
  }
  &__label {
    padding-left: 0.3em;
  }
}

.#{$--clsPrefix}-checkbox--checked {
  .#{$--clsPrefix}-checkbox__inner {
    background-color: $--checkbox-color-active;
    &:after {
      transform: rotate(45deg) scale(1);
    }
  }
  .#{$--clsPrefix}-checkbox__label {
    color: $--checkbox-color-active;
  }
}
.#{$--clsPrefix}-checkbox--focused {
  .#{$--clsPrefix}-checkbox__inner {
    box-shadow: $--box-shadow-size
      rgba($--radio-color-active, $--box-shadow-transparency);
  }
}
.#{$--clsPrefix}-checkbox--disabled {
  opacity: $--disabled-opacity;
  .#{$--clsPrefix}-checkbox__input {
    cursor: not-allowed;
  }
}

.#{$--clsPrefix}-checkbox--readonly {
  pointer-events: none;
}
.#{$--clsPrefix}-checkbox--border {
  border: 1px solid $--color-border;
  padding: 0.4em 0.6em;
  border-radius: $--border-radius;
  &.#{$--clsPrefix}-checkbox--checked {
    border-color: $--checkbox-color-active;
  }
  &.#{$--clsPrefix}-checkbox--focused {
    box-shadow: $--box-shadow-size
      rgba($--checkbox-color-active, $--box-shadow-transparency);
    .#{$--clsPrefix}-checkbox__inner {
      box-shadow: none;
    }
  }
}
</style>
