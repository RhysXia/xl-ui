<template lang="pug">
  button(@click="click",:class='classes',:type="nativeType",:disabled='disabled')
    slot
</template>
<script>
const name = 'xl-button'
export default {
  name,
  props: {
    type: {
      default: 'default',
      validator(value) {
        return [
          'default',
          'primary',
          'success',
          'warning',
          'error',
          'info',
          'text'
        ].includes(value)
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    nativeType: {
      default: 'button',
      validator(val) {
        return ['button', 'submit', 'reset'].includes(val)
      }
    },
    long: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      const arr = [name]
      if (this.type) {
        arr.push(`${name}--${this.type}`)
      }
      if (this.round) {
        arr.push(`${name}--round`)
      }
      if (this.long) {
        arr.push(`${name}--long`)
      }
      return arr
    }
  },
  methods: {
    click() {
      console.log(1)
    }
  }
}
</script>
<style lang="scss">
@import '../../styles/variables.scss';
.#{$--clsPrefix}-button {
  font-size: 1em;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.2s ease-in-out;
  border-radius: $--border-radius;
  &::-moz-focus-inner {
    border: 0;
  }
  padding: 0.4em 0.6em;
  border: 1px solid;

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
}
.#{$--clsPrefix}-button--long {
  display: block;
  width: 100%;
}
.#{$--clsPrefix}-button--round {
  border-radius: 1em;
}

.#{$--clsPrefix}--plain {
  // background-color: $button-bg-color !important;
  &:hover {
    // background-color: $button-bg-color !important;
  }
}

.#{$--clsPrefix}-button--default {
  background-color: $--btn-bg-color--default;
  border-color: $--btn-border-color--default;
  color: $--btn-color--default;
}
</style>
