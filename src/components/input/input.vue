<template lang="pug">
  div(:class='classes')
    textarea(ref="textarea",v-if="type=='textarea'",:value='currentValue',@input='_inputHandler',@focus="_focusHandler",@blur="_blurHandler",:style="textareaStyles",:placeholder='placeholder',:rows='rows',:readonly='readonly',:disabled='disabled')
    template(v-else)
      div(:class="[prefixCls+'__prefix']",v-if="$slots&&$slots.prefix")
        slot(name="prefix")
      div(:class="prefixCls+'__inner-wrapper'",@mouseenter="isHovered = true",@mouseleave="isHovered = false")
        Icon(@click="_iconClickHandler",:class="prefixCls+'__prefix-icon'",v-if="prefixIcon",:type="prefixIcon")
        input(:class="inputClasses",ref="input",:type='type',:value='currentValue',@input='_inputHandler',@focus="_focusHandler",@blur="_blurHandler",:placeholder='placeholder',:readonly='readonly',:disabled='disabled')
        Icon(ref="icon-clear",@click="currentValue=''",:class="prefixCls+'__suffix-icon'",v-if="clearable&&currentValue&&(isFocused||isHovered)&&!readonly&&!disabled",type="ios-close")
        Icon(@click="_iconClickHandler",:class="prefixCls+'__suffix-icon'",v-else-if="suffixIcon",:type="suffixIcon")
      div(:class="[prefixCls+'__suffix']",v-if="$slots&&$slots.suffix")
        slot(name="suffix")
</template>
<script>
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
    autosize: [Boolean, Object],
    rows: {
      type: Number,
      default: 2
    },
    type: {
      default: 'text',
      validator(value) {
        return [
          'text',
          'password',
          'textarea',
          'url',
          'email',
          'date'
        ].includes(value)
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
      prefixCls: name,
      currentValue: this.value,
      textareaStyles: {},
      isFocused: false,
      isHovered: false
    }
  },
  computed: {
    inputClasses() {
      const arr = [`${this.prefixCls}__inner`]

      if (this.suffixIcon) {
        arr.push(`${this.prefixCls}__inner--suffix-icon`)
      }
      if (this.prefixIcon) {
        arr.push(`${this.prefixCls}__inner--prefix-icon`)
      }

      return arr
    },
    classes() {
      const arr = [`${this.prefixCls}`]
      if (this.autosize) {
        arr.push(`${this.prefixCls}--autosize`)
      }
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
    }
  },
  methods: {
    focus() {
      ;(this.$refs.textarea || this.$refs.input).focus()
    },
    blur() {
      ;(this.$refs.textarea || this.$refs.input).blur()
    },
    _iconClickHandler() {
      this.$emit('on-icon-click')
    },
    _blurHandler(e) {
      this.$emit('on-blur', e)
      this.isFocused = false
    },
    _focusHandler(e) {
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
