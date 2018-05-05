<template lang="pug">
  button(@click="_clickHandler",:class='classes',:type="nativeType",:disabled='disabled')
    Icon(v-if='loading',type='load-c')
    Icon(v-else-if='icon',:type='icon')
    span(v-if='$slots&&$slots.default')
      slot
</template>
<script>
import Icon from '../icon'
import { oneOf } from '../../utils/utils'
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
        return oneOf(
          ['default', 'primary', 'success', 'warning', 'error', 'info', 'text'],
          value
        )
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
        return oneOf(['button', 'submit', 'reset'], val)
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
      this.$emit('on-click', e)
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
