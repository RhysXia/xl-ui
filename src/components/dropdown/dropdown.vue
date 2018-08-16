<template lang="pug">
    div
      div(ref="reference")
        slot
      div(ref="popper")
        slot(name="dropdown")
</template>
<script>
import popper from '@/mixins/popper'
const name = 'xl-dropdown'
export default {
  name,
  mixins: [popper],
  provide() {
    return {
      xlDropdown: this
    }
  },
  props: {
    placement: {
      type: String,
      default: 'bottom'
    }
  }
}
</script>
