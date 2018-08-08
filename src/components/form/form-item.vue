<template lang="pug">
  div(:class="classes")
    slot
</template>
<script>
const name = 'xl-form-item'
export default {
  name,
  computed: {
    classes() {
      return [name]
    }
  }
}
</script>
