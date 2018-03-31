<template lang="pug">
  div(:class="classes")
    slot
</template>
<script>
const name = 'xl-dropdown-menu'
export default {
  name,
  computed: {
    classes() {
      const arr = [name]
      return arr
    }
  }
}
</script>
<style lang="scss">
@import '../../styles/variables.scss';

.#{$--clsPrefix}-dropdown-menu {
  box-shadow: $--dropdown-box-shadow;
  background-color: $--dropdown-color-bg;
  border-radius: $--border-radius;
  border: 1px solid $--color-border;
}
.#{$--clsPrefix}-dropdown-menu--divide {
  .#{$--clsPrefix}-dropdown-item:not(:last-child) {
    border-bottom: 1px solid $--color-border;
  }
}
</style>
