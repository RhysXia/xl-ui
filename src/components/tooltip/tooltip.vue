<template lang="pug">
  Poptip(:transfer="transfer",:width="width",:padding="padding",:trigger="custom")
    slot
    template(slot="content") {{content}}
</template>
<script>
import Poptip from '../poptip'
import transferDom from '../../directives/transfer-dom'
import clickoutside from '../../directives/clickoutside'
import { oneOf } from '../../utils/array'

const name = 'xl-tooltip'
export default {
  name,
  directives: {
    transferDom,
    clickoutside
  },
  props: {
    transfer: {
      type: Boolean,
      default: false
    },
    content: String,
    trigger: {
      default: 'hover',
      validator(val) {
        return oneOf(['hover', 'click', 'custom'], val)
      }
    },
    width: {
      type: [String, Number, Object],
      default: () => ({
        min: 150,
        max: 300
      })
    },
    padding: {
      type: String,
      default: '0.5em 1em'
    }
  },
  data() {
    return {
    }
  },
  computed: {
    classes() {
      const arr = [name]
      return arr
    }
  },
  methods: {
  },
  mounted() {
  },
  components: {
    Poptip
  }
}
</script>
