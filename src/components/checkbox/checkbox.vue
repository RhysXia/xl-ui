<template lang="pug">
  span(:class="checkboxClasses")
    input(type='checkbox',:class="inputClasses",:name="groupName",:disabled="disabled",:readonly="readonly",:checked="currentValue",@focus="_focusHandler",@blur="_blurHandler",@change="_changeHandler")
    span(:class="innerClasses")
    span(:class="labelClasses",v-if="label||($slots&&$slots.default)")
        slot {{label}}
</template>
<script>
import { oneOf } from '@/utils/array'
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
    name: String,
    indeterminate: Boolean
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
      this.currentValue = oneOf(val, this.value || this.label)
    }
  },
  computed: {
    checkboxClasses() {
      const arr = [name]
      if (this.indeterminate) {
        arr.push(`${name}--indeterminate`)
      } else if (this.currentValue) {
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
      this.currentValue = oneOf(
        this.xlCheckboxGroup.currentValue,
        this.value || this.label
      )
    } else {
      this.currentValue = this.value === this.trueValue
    }
  }
}
</script>
