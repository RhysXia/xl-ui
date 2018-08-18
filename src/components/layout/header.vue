<template lang="pug">
    div(:class="classes")
      slot
</template>
<script>
const name = 'xl-header'
export default {
  name,
  computed: {
    classes() {
      return name
    }
  }
}
</script>
