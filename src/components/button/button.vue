<template lang="pug">
  button(@click="_clickHandler",:class='classes',:disabled="isDisabled",:type="nativeType")
    Icon(v-if='loading',type='load-c')
    Icon(v-else-if='icon',:type='icon')
    span(v-if='$slots.default')
      slot
</template>
<script>
import Icon from '../icon'
import { oneOf } from '@/utils/array'
const name = 'xl-button'
export default {
  name,
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    dashed: {
      type: Boolean,
      default: false
    },
    icon: String,
    type: {
      default: 'default',
      validator(value) {
        return oneOf(
          [
            'default',
            'primary',
            'success',
            'warning',
            'danger',
            'info',
            'secondary',
            'dark',
            'text'
          ],
          value
        )
      }
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
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isDisabled() {
      if (this.loading) {
        return true
      }
      return this.disabled
    },
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
      if (this.plain) {
        arr.push(`${name}--plain`)
      }
      if (this.loading) {
        arr.push(`${name}--loading`)
      }
      if (this.dashed) {
        arr.push(`${name}--dashed`)
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
