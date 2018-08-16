<template lang="pug">
    Poptip(:placement="placement",:arrow="false")
      slot
      div(slot="content")
        slot(name="dropdown")
</template>
<script>
import Poptip from '../poptip'
const name = 'xl-dropdown'
export default {
  name,
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
  },
  components: {
    Poptip
  }
}
</script>
