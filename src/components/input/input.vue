<template lang="pug">
  div(:class='classes',@mouseenter="_mouseenter",@mouseleave="_mouseleave")
    textarea(:class="textareaClasses" ref="textarea",v-if="type=='textarea'",:value='currentValue',@input='_inputHandler',@focus="_focusHandler",@blur="_blurHandler",:style="textareaStyles",:placeholder='placeholder',:rows='rows',:readonly='readonly',:disabled='disabled')
    template(v-else)
      span(:class="prefixClasses",v-if="$slots.prefix")
        slot(name="prefix")
      span(:class="bodyClasses")
        Icon(:class="prefixIconClasses",v-if="prefixIcon",@on-click="_iconClickHandler",:type="prefixIcon")
        input(:class="inputClasses",ref="input",:type='type',:value='currentValue',@input='_inputHandler',@focus="_focusHandler",@blur="_blurHandler",:placeholder='placeholder',:readonly='readonly',:disabled='disabled')
        Icon(:class="clearIconClasses",ref="icon-clear",@on-click="currentValue=''",type="ios-close",v-if="isClearShow")
        Icon(:class="suffixIconClasses",@on-click="_iconClickHandler",v-else-if="suffixIcon",:type="suffixIcon")
      span(:class="suffixClasses",v-if="$slots.suffix")
        slot(name="suffix")
</template>
<script>
import { oneOf } from '@/utils/array'
import calcTextareaHeight from './calcTextareaHeight'
import Icon from '../icon'
const name = 'xl-input'
export default {
  name,
  model: {
    prop: 'value',
    event: 'on-input'
  },
  props: {
    suffixIcon: String,
    prefixIcon: String,
    clearable: Boolean,
    // true/false/{minRows:1,maxRows:5}
    autosize: {
      type: [Boolean, Object]
    },
    rows: {
      type: Number,
      default: 2
    },
    type: {
      default: 'text',
      validator(value) {
        return oneOf(
          ['text', 'password', 'textarea', 'url', 'email', 'date'],
          value
        )
      }
    },
    value: String,
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value,
      textareaStyles: {},
      isFocused: false,
      isHovered: false
    }
  },
  computed: {
    isClearShow() {
      return (
        this.clearable &&
        this.currentValue &&
        (this.isFocused || this.isHovered) &&
        !this.readonly &&
        !this.disabled
      )
    },
    classes() {
      const arr = [`${name}`]
      if (this.autosize) {
        arr.push(`${name}--autosize`)
      }
      if (this.isHovered) {
        arr.push(`${name}--hover`)
      }
      if (this.isFocused) {
        arr.push(`${name}--focus`)
      }
      if (this.disabled) {
        arr.push(`${name}--disabled`)
      }
      if (this.readonly) {
        arr.push(`${name}--readonly`)
      }
      return arr
    },
    textareaClasses() {
      const arr = [`${name}__textarea`]
      return arr
    },
    prefixClasses() {
      const arr = [`${name}__prefix`]
      return arr
    },
    suffixClasses() {
      const arr = [`${name}__suffix`]
      return arr
    },
    prefixIconClasses() {
      const arr = [`${name}__prefix-icon`]
      return arr
    },
    bodyClasses() {
      const arr = [`${name}__body`]
      return arr
    },
    inputClasses() {
      const arr = [`${name}__inner`]
      if (this.prefixIcon) {
        arr.push(`${name}__inner--prefix-icon`)
      }
      if (this.suffixIcon) {
        arr.push(`${name}__inner--suffix-icon`)
      }
      return arr
    },
    suffixIconClasses() {
      const arr = [`${name}__suffix-icon`]
      return arr
    },
    clearIconClasses() {
      const arr = [`${name}__suffix-icon`, `${name}__suffix-icon--clear`]
      return arr
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    },
    currentValue(val) {
      this.$emit('on-input', val)
      this.$nextTick(() => {
        this._resizeTextarea()
      })
    },
    autosize(val) {
      this.$nextTick(() => {
        this._resizeTextarea()
      })
    }
  },
  methods: {
    focus() {
      ;(this.$refs.textarea || this.$refs.input).focus()
    },
    blur() {
      ;(this.$refs.textarea || this.$refs.input).blur()
    },
    _mouseenter() {
      if (this.disabled || this.readonly) {
        return
      }
      this.isHovered = true
    },
    _mouseleave() {
      if (this.disabled || this.readonly) {
        return
      }
      this.isHovered = false
    },
    _iconClickHandler() {
      this.$emit('on-icon-click')
    },
    _blurHandler(e) {
      if (this.disabled || this.readonly) {
        return
      }
      this.$emit('on-blur', e)
      this.isFocused = false
    },
    _focusHandler(e) {
      if (this.disabled || this.readonly) {
        return
      }
      this.$emit('on-focus', e)
      this.isFocused = true
    },
    _inputHandler(e) {
      const value = (e.target || e.srcElement).value
      this.currentValue = value
    },
    _resizeTextarea() {
      const autosize = this.autosize
      if (!autosize || this.type !== 'textarea') {
        return false
      }
      const minRows = autosize.minRows
      const maxRows = autosize.maxRows
      this.textareaStyles = calcTextareaHeight(
        this.$refs.textarea,
        minRows,
        maxRows
      )
    }
  },
  mounted() {
    this._resizeTextarea()
  },
  components: {
    Icon
  }
}
</script>
