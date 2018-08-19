<template lang="pug">
    div(:class="classes")
        div(:class="headerClasses",@click="click")
            slot(name="title") {{title}}
        slot
</template>
<script>
const name = 'xl-panel'
export default {
  name,
  inject: ['xlCollapse'],
  props: {
    title: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    classes() {
      const arr = [name]
      return arr
    },
    headerClasses() {
      const arr = [`${name}__header`]
      return arr
    }
  },
  methods: {
    click() {
      this.xlCollapse.toggle(this.index)
    }
  }
}
</script>
