<template lang="pug">
  button(@click="_clickHandler",:class='classes',:type="nativeType",:disabled='disabled')
    Icon(v-if='loading',type='load-c')
    Icon(v-else-if='icon',:type='icon')
    span
      slot
</template>
<script>
import Icon from '../icon'
const name = 'xl-button'
export default {
  name,
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    icon: String,
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
  data() {
    return {
      prefixCls: name
    }
  },
  computed: {
    classes() {
      const arr = [this.prefixCls]
      if (this.type) {
        arr.push(`${this.prefixCls}--${this.type}`)
      }
      if (this.round) {
        arr.push(`${this.prefixCls}--round`)
      }
      if (this.long) {
        arr.push(`${this.prefixCls}--long`)
      }
      if (this.plain) {
        arr.push(`${this.prefixCls}--plain`)
      }
      if (this.loading) {
        arr.push(`${this.prefixCls}--loading`)
      }
      return arr
    }
  },
  methods: {
    _clickHandler(e) {
      this.$emit('click', e)
    },
    foucs() {
      this.$el.focus()
    }
  },
  components: {
    Icon
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
  border-radius: $--border-radius;
  padding: 0.4em 0.6em;
  border: 1px solid;
  transition: background-color $--transition-time ease, border-color $--transition-time ease;
  &::-moz-focus-inner {
    border: 0;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .#{$--clsPrefix}-icon + span {
    padding-left: 0.25em;
  }
}
.#{$--clsPrefix}-button--long {
  display: block;
  width: 100%;
}
.#{$--clsPrefix}-button--round {
  border-radius: 1em * 0.5 + 0.4em; //字体高度的一半+padding
}

.#{$--clsPrefix}-button--plain {
  background-color: $--btn-bg-color--default !important;
  &:hover {
    background-color: $--btn-bg-color--default !important;
  }
}

@keyframes #{$--clsPrefix}-button-loading-loop {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.#{$--clsPrefix}-button--loading {
  cursor: default;
  pointer-events: none;
  opacity: 0.5;
  .#{$--clsPrefix}-icon {
    animation: #{$--clsPrefix}-button-loading-loop 1s linear infinite;
  }
}

.#{$--clsPrefix}-button--default {
  background-color: $--btn-bg-color--default;
  border-color: $--btn-border-color--default;
  color: $--btn-color--default;
  &:not(:disabled):hover,
  &:not(:disabled):focus {
    background-color: $--btn-bg-color--default--hover;
    border-color: $--btn-border-color--default--hover;
    color: $--btn-color--default--hover;
  }
}

.#{$--clsPrefix}-button--success {
  background-color: $--btn-bg-color--success;
  border-color: $--btn-border-color--success;
  color: $--btn-color--success;
  &:not(:disabled):hover,
  &:not(:disabled):focus {
    background-color: $--btn-bg-color--success--hover;
    border-color: $--btn-border-color--success--hover;
    color: $--btn-color--success--hover;
  }
  &.#{$--clsPrefix}-button--plain {
    color: $--btn-bg-color--success;
    &:not(:disabled):hover,
    &:not(:disabled):focus {
      color: $--btn-bg-color--success--hover;
    }
  }
}

.#{$--clsPrefix}-button--primary {
  background-color: $--btn-bg-color--primary;
  border-color: $--btn-border-color--primary;
  color: $--btn-color--primary;
  &:not(:disabled):hover,
  &:not(:disabled):focus {
    background-color: $--btn-bg-color--primary--hover;
    border-color: $--btn-border-color--primary--hover;
    color: $--btn-color--primary--hover;
  }
  &.#{$--clsPrefix}-button--plain {
    color: $--btn-bg-color--primary;
    &:not(:disabled):hover,
    &:not(:disabled):focus {
      color: $--btn-bg-color--primary--hover;
    }
  }
}

.#{$--clsPrefix}-button--warning {
  background-color: $--btn-bg-color--warning;
  border-color: $--btn-border-color--warning;
  color: $--btn-color--warning;
  &:not(:disabled):hover,
  &:not(:disabled):focus {
    background-color: $--btn-bg-color--warning--hover;
    border-color: $--btn-border-color--warning--hover;
    color: $--btn-color--warning--hover;
  }
  &.#{$--clsPrefix}-button--plain {
    color: $--btn-bg-color--warning;
    &:not(:disabled):hover,
    &:not(:disabled):focus {
      color: $--btn-bg-color--warning--hover;
    }
  }
}

.#{$--clsPrefix}-button--error {
  background-color: $--btn-bg-color--error;
  border-color: $--btn-border-color--error;
  color: $--btn-color--error;
  &:not(:disabled):hover,
  &:not(:disabled):focus {
    background-color: $--btn-bg-color--error--hover;
    border-color: $--btn-border-color--error--hover;
    color: $--btn-color--error--hover;
  }
  &.#{$--clsPrefix}-button--plain {
    color: $--btn-bg-color--error;
    &:not(:disabled):hover,
    &:not(:disabled):focus {
      color: $--btn-bg-color--error--hover;
    }
  }
}

.#{$--clsPrefix}-button--info {
  background-color: $--btn-bg-color--info;
  border-color: $--btn-border-color--info;
  color: $--btn-color--info;
  &:not(:disabled):hover,
  &:not(:disabled):focus {
    background-color: $--btn-bg-color--info--hover;
    border-color: $--btn-border-color--info--hover;
    color: $--btn-color--info--hover;
  }
  &.#{$--clsPrefix}-button--plain {
    color: $--btn-bg-color--info;
    &:not(:disabled):hover,
    &:not(:disabled):focus {
      color: $--btn-bg-color--info--hover;
    }
  }
}

.#{$--clsPrefix}-button--text {
  background-color: $--btn-bg-color--text;
  border-color: $--btn-border-color--text;
  color: $--btn-color--text;
  &:not(:disabled):hover,
  &:not(:disabled):focus {
    color: $--btn-color--text--hover;
  }
}
</style>
