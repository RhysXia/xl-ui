<template lang="pug">
  form(:class="classes")
    slot
</template>
<script>
import { oneOf } from '../../utils/utils'

const name = 'xl-form'

export default {
  name,
  props: {
    model: Object,
    rules: Object,
    labelWidth: [String, Number],
    labelPosition: {
      default: 'right',
      validator(val) {
        return oneOf(['left', 'right', 'top'], val)
      }
    },
    inline: Boolean,
    showMessage: Boolean,
    inlineMessage: Boolean,
    disabled: Boolean
  },
  computed: {
    classes() {
      const arr = [name]

      return arr
    }
  }
}
</script>
