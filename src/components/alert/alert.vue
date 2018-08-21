<template lang="pug">
  div(:class="classes")
    span(:class="iconClasses")
      slot(name="icon")
        Icon(:type="iconType",v-if="showIcon")
    span(:class="msgClasses")
      slot
    span(:class="descClasses")
      slot(name="desc")
    span(:class="closeClasses")
      slot(name="close")
        Icon(type="close",v-if="closable")
</template>
<script>
import { oneOf } from '@/utils/array'
import { IconMap } from '@/utils/icon-map'
import Icon from '../icon'
const name = 'xl-alert'

export default {
  name,
  props: {
    type: {
      default: 'info',
      validator(val) {
        return oneOf(['info', 'success', 'warning', 'error'], val)
      }
    },
    closable: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    iconType() {
      return IconMap[this.type]
    },
    isDesc() {
      return !!this.$slots.desc
    },
    classes() {
      const arr = [name, `${name}--${this.type}`]
      if (this.isDesc) {
        arr.push(`${name}--has-desc`)
      }
      return arr
    },
    iconClasses() {
      const arr = [`${name}__icon`]
      return arr
    },
    msgClasses() {
      const arr = [`${name}__msg`]
      return arr
    },
    descClasses() {
      const arr = [`${name}__desc`]
      return arr
    },
    closeClasses() {
      const arr = [`${name}__close`]
      return arr
    }
  },
  components: {
    Icon
  }
}
</script>
