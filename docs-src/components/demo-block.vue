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
        ? { transform: 'scale(2) rotate(0deg)' }
        : { transform: 'scale(2) rotate(180deg)' }
    }
  }
}
</script>
<style lang="scss">
@import '../../src/styles/variables.scss';
.demo-block {
  border: 1px solid $--color-border;
  font-size: 1em;
  transition: box-shadow $--transition-time ease-in-out;
  code {
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
  }
  &:hover {
    box-shadow: 0 0 0.5em $--color-border;
  }
  .demo-code {
    padding: 1em;
    border-bottom: 1px solid $--color-border;
    margin-bottom: 1em;
  }
  .demo-bottom {
    padding: 0 1em;
    position: relative;
    .demo-desc {
      padding-right: 2em;
      code {
        background-color: #e6effb;
        display: inline-block;
        margin: 0 0.2em;
        padding: 0.1em 0.4em;
        height: 1.1em;
        line-height: 1.1em;
      }
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
    pre {
      margin: 0;
    }
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
