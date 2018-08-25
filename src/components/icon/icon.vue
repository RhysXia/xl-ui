<template lang="pug">
  i(:class='classes',:style='styles',@click="_clickHandler")
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
    size: [String]
  },
  data() {
    return {
      prefixCls: name
    }
  },
  computed: {
    classes() {
      return [this.prefixCls, `${this.prefixCls}-${this.type}`]
    },
    styles() {
      const style = {}
      if (this.size) {
        style.fontSize = this.size
        style.width = this.size
        style.height = this.size
      }
      if (this.color) {
        style.color = this.color
      }
      return style
    }
  },
  methods: {
    _clickHandler(e) {
      this.$emit('on-click', e)
    }
  }
}
</script>
