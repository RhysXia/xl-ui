<template lang="pug">
  i(:class='classes',:style='styles')
</template>
<script>
const name = 'xl-icon'
export default {
  name,
  props: {
    type: {
      type: String,
      required: true
    },
    color: String,
    size: [Number, String]
  },
  computed: {
    classes () {
      return [name, `${name}-${this.type}`]
    },
    styles () {
      const style = {}
      if (this.size) {
        style['font-size'] = `${this.size}px`
      }
      if (this.color) {
        style.color = this.color
      }
      return style
    }
  }
}
</script>
