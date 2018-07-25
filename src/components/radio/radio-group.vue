<template lang="pug">
  div(:class='classes')
    slot
</template>
<script>
import { oneOf } from '../../utils/array'
const name = 'xl-radio-group'

let i = 0

const generateGrouName = () => {
  return `${name}-name${i++}`
}

export default {
  name,
  provide() {
    return {
      xlRadioGroup: this
    }
  },
  model: {
    prop: 'value',
    event: 'on-change'
  },
  props: {
    value: [String, Number, Boolean],
    type: {
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
    value(val) {
      this.currentValue = val
    },
    currentValue(val) {
      this.$emit('on-change', val)
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
