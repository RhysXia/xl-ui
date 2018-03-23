<template lang="pug">
  div(:class='classes')
    textarea(v-if="type=='textarea'",:value='value',@input='_inputHandler',:placeholder='placeholder',:rows='rows',:readonly='readonly',:disabled='disabled')
    template(v-else)
      div(:class="[prefixCls+'__prepend']",v-if="$slots&&$slots.prepend")
        slot(name="prepend")
      input(:type='type',:value='value',@input='_inputHandler',:placeholder='placeholder',:readonly='readonly',:disabled='disabled')
      div(:class="[prefixCls+'__append']",v-if="$slots&&$slots.append")
        slot(name="append")
</template>
<script>
const name = 'xl-input'
export default {
  name,
  props: {
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
      prefixCls: name
    }
  },
  computed: {
    classes() {
      const arr = [`${this.prefixCls}`]
      if (this.disabled) {
        arr.push(`${this.prefixCls}--disabled`)
      }
      if (this.readonly) {
        arr.push(`${this.prefixCls}--readonly`)
      }
      return arr
    }
  },
  methods: {
    _inputHandler(e) {
      const value = (e.target || e.srcElement).value
      this.$emit('input', value)
    }
  },
  mounted() {}
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
    display: table-cell;
    box-sizing: border-box;
    vertical-align: middle;
    padding: 0.5em 1em;
    border: 1px solid $--input-border-color;
    font-size: 1em;
  }
  input,
  textarea {
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
}
</style>
