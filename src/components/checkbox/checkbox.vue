<template lang="pug">
  span(:class="checkboxClasses")
    input(type='checkbox',:class="inputClasses",:name="groupName",:disabled="disabled",:readonly="readonly",:checked="checked",@focus="_focusHandler",@blur="_blurHandler",@change="_changeHandler")
    span(:class="innerClasses")
    span(:class="labelClasses",v-if="$slots.default||showedLabel")
        slot {{showedLabel}}
</template>
<script>
import { oneOf } from '@/utils/array'
const name = 'xl-checkbox'
export default {
  name,
  inject: {
    xlCheckboxGroup: {
      default: () => null
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
    bordered: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    name: String,
    indeterminate: Boolean
  },
  data() {
    return {
      checked: false,
      focused: false
    }
  },
  watch: {
    value(val) {
      if (this.isGroup) {
        return
      }
      this.checked = val === this.trueValue
    },
    checked(val) {
      if (this.isGroup) {
        const value = this.value
        const currentValue = this.xlCheckboxGroup.currentValue.filter(
          it => it !== value
        )
        if (val) {
          currentValue.push(value)
        }
        this.xlCheckboxGroup.currentValue = currentValue
        return
      }
      const value = val ? this.trueValue : this.falseValue
      this.$emit('on-change', value)
    },
    'xlCheckboxGroup.currentValue'(val) {
      this.checked = oneOf(val, this.value || this.label)
    }
  },
  computed: {
    showedLabel() {
      if (this.label) {
        return this.label
      }
      if (this.isGroup) {
        return this.value
      }
      return false
    },
    checkboxClasses() {
      const arr = [name]
      if (this.indeterminate) {
        arr.push(`${name}--indeterminate`)
      } else if (this.checked) {
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
      if (this.bordered) {
        arr.push(`${name}--bordered`)
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
      const checked = e.target.checked
      this.checked = checked
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
      this.checked = oneOf(this.xlCheckboxGroup.value, this.value)
    } else {
      this.checked = this.value === this.trueValue
    }
  }
}
</script>
