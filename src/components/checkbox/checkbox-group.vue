<template lang="pug">
  div(:class="classes")
    slot
</template>
<script>
import { oneOf } from '@/utils/array'
const name = 'xl-checkbox-group'

let i = 0

const generateGrouName = () => {
  return `${name}-name${i++}`
}

export default {
  name,
  model: {
    prop: 'value',
    event: 'on-change'
  },
  provide() {
    return {
      xlCheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      validator(val) {
        return oneOf(['button'], val)
      }
    },
    name: {
      type: String,
      default: generateGrouName
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  watch: {
    currentValue(val) {
      this.$emit('on-change', val)
    },
    value(val) {
      this.currentValue = val
    }
  },
  computed: {
    classes() {
      const arr = [name]
      if (this.type) {
        arr.push(`${name}--${this.type}`)
      }
      return arr
    }
  }
}
</script>
