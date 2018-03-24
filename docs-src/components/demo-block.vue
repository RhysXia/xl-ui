<template lang="pug">
  .demo-block
    .demo-code
      slot
    .demo-bottom
      .demo-desc
        slot(name='desc')
      xl-icon.demo-icon(:style='iconStyle',type='android-arrow-dropup-circle',@click='expand=!expand')
    transition(name='slide')
      .demo-source(v-show='expand')
        slot(name="source")
</template>
<script>
export default {
  name: 'demo-block',
  data() {
    return {
      expand: false
    }
  },
  computed: {
    iconStyle() {
      return this.expand
        ? {transform: 'scale(2) rotate(0deg)'}
        : {transform: 'scale(2) rotate(180deg)'}
    }
  }
}
</script>
<style lang="scss">
@import '../../src/styles/variables.scss';
.demo-block {
  border: 1px solid $--color-border;
  padding: 1em;
  font-size: 1em;
  .demo-code {
    padding-bottom: 1em;
    border-bottom: 1px solid $--color-border;
    margin-bottom: 1em;
  }
  .demo-bottom {
    position: relative;
    * {
      margin: 0;
      padding: 0;
    }
    .demo-icon {
      position: absolute;
      right: 1em;
      top: 0;
      cursor: pointer;
      font-size: 1em;
      color: #888;
      transition: transform $--transition-time ease-in-out;
    }
  }
  .demo-source {
    border-top: 1px solid $--color-border;
    margin-top: 1em;
    padding-top: 1em;
  }
  .slide-enter-active,
  .slide-leave-active {
    transform-origin: 0 0;
    transition: transform $--transition-time ease-in-out;
  }
  .slide-enter,
  .slide-leave-to {
    transform: scaleY(0);
  }
  .slide-enter-to,
  .slide-leave {
    transform: scaleY(1);
  }
}
</style>
