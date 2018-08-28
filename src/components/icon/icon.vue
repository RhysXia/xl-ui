<template lang="pug">
  i(:class='classes',@click="_clickHandler")
</template>
<script>
const name = 'xl-icon'
export default {
  name,
  props: {
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    classes() {
      return [name, `${name}-${this.type}`]
    }
  },
  methods: {
    _clickHandler(e) {
      this.$emit('on-click', e)
    }
  }
}
</script>
