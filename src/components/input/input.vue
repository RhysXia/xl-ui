<template lang="pug">
  div(:class='classes')
    textarea(ref="textarea",v-if="type=='textarea'",:value='currentValue',@input='_inputHandler',@focus="_focusHandler",@blur="_blurHandler",:style="textareaStyles",:placeholder='placeholder',:rows='rows',:readonly='readonly',:disabled='disabled')
    template(v-else)
      div(:class="[prefixCls+'__prepend']",v-if="$slots&&$slots.prepend")
        slot(name="prepend")
      div(:class="prefixCls+'__inner-wrapper'",@mouseenter="isHovered = true",@mouseleave="isHovered = false")
        input(ref="input",:type='type',:value='currentValue',@input='_inputHandler',@focus="_focusHandler",@blur="_blurHandler",:placeholder='placeholder',:readonly='readonly',:disabled='disabled')
        Icon(ref="icon-clear",@click="currentValue=''",:class="prefixCls+'__icon'",v-if="clearable&&currentValue&&(isFocused||isHovered)&&!readonly&&!disabled",type="ios-close")
        Icon(@click="_iconClickHandler",:class="prefixCls+'__icon'",v-else-if="icon",:type="icon")
      div(:class="[prefixCls+'__append']",v-if="$slots&&$slots.append")
        slot(name="append")
</template>
<script>
import calcTextareaHeight from '@/utils/calcTextareaHeight'
import Icon from '../icon'
const name = 'xl-input'
export default {
  name,
  props: {
    icon: String,
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
      this.$emit('input', val)
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
      this.$emit('icon-click')
    },
    _blurHandler(e) {
      this.$emit('blur', e)
      this.isFocused = false
    },
    _focusHandler(e) {
      this.$emit('focus', e)
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
<style lang="scss">
@import '../../styles/variables.scss';
.#{$--clsPrefix}-input {
  position: relative;
  display: table;
  box-sizing: border-box;
  width: 100%;
  .#{$--clsPrefix}-input__prepend,
  .#{$--clsPrefix}-input__append,
  input,
  textarea {
    position: relative;
    box-sizing: border-box;
    padding: 0.5em 1em;
    border: 1px solid $--input-border-color;
    font-size: 1em;
    z-index: 1;
  }
  input,
  textarea {
    resize: none;
    outline: none;
    color: $--color-text;
    width: 100%;
    appearance: none;
    background-color: $--input-bg-color;
    background-image: none;
    transition: border-color $--transition-time ease;
    &:not(:disabled):not(:read-only) {
      &:hover {
        border-color: $--input-border-color--hover;
      }
      &:focus {
        border-color: $--input-border-color--focus;
      }
    }
    &:disabled {
      cursor: not-allowed;
      background-color: $--input-bg-color--disabled;
    }
  }
  .#{$--clsPrefix}-input__prepend,
  .#{$--clsPrefix}-input__append {
    color: $--color-text--secondary;
    width: 1px;
    background-color: $--input-append-bg-color;
    text-align: center;
    white-space: nowrap;
    display: table-cell;
    vertical-align: middle;
  }
  .#{$--clsPrefix}-input__prepend {
    border-right: none;
  }
  .#{$--clsPrefix}-input__append {
    border-left: none;
  }
  & > :first-child {
    border-top-left-radius: $--border-radius;
    border-bottom-left-radius: $--border-radius;
  }
  & > :last-child {
    border-bottom-right-radius: $--border-radius;
    border-top-right-radius: $--border-radius;
  }
  .#{$--clsPrefix}-input__inner-wrapper {
    position: relative;
    display: table-cell;
    vertical-align: middle;
  }

  .#{$--clsPrefix}-input__icon {
    position: absolute;
    top: 2px;
    right: 0;
    height: 2em;
    width: 2em;
    line-height: 2em;
    text-align: center;
    font-size: 1em;
    z-index: 3;
    cursor: pointer;
  }
}
.#{$--clsPrefix}-input--autosize {
  textarea {
    transition: height $--transition-time ease-in-out;
  }
}
</style>
