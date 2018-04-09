<template lang="pug">
  div(:class="classes")
    slot
</template>
<script>
const name = 'xl-dropdown-menu'
export default {
  name,
  inject: ['xlDropdown'],
  computed: {
    classes() {
      const arr = [name]
      if (this.xlDropdown && this.xlDropdown.divide) {
        arr.push(`${name}--divide`)
      }
      return arr
    }
  }
}
</script>
