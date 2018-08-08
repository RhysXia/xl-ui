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
      return this.isGroup ? this.xlRadioGroup.name : this.name
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
  created() {
    if (this.isGroup) {
      this.currentValue =
        this.xlRadioGroup.currentValue === (this.value || this.label)
    } else {
      this.currentValue = this.value === this.trueValue
    }
  }
}
</script>
