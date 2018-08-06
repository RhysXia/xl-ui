<template lang="pug">
  .demo-block
    .demo-code
      slot
    .demo-bottom
      .demo-desc
        slot(name='desc')
      xl-icon.demo-icon(:style='iconStyle',type='android-arrow-dropup-circle',@click='expand=!expand')
    transition(:css="false" @before-enter="beforeEnter",@enter="enter",@after-enter="afterEnter",@before-leave="beforeLeave",@leave="leave",@after-leave="afterLeave")
      .demo-source(v-show='expand')
        slot(name="source")
</template>
<script>
const formatHeight = height => {
  if (height) {
    return Number(height.slice(0, height.length - 2))
  }
  return 0
}
export default {
  name: 'demo-block',
  data() {
    return {
      expand: false,
      expandDuration: 400,
      perHeight: 10
    }
  },
  computed: {
    iconStyle() {
      return this.expand
        ? { transform: 'rotate(0deg)' }
        : { transform: 'rotate(180deg)' }
    }
  },
  methods: {
    beforeEnter(el) {
      clearInterval(this._timer)
      el.style.overflowY = 'hidden'
      el.style.height = el.style.height || '0px'
    },
    enter(el, done) {
      const actualHeight = el.scrollHeight
      const perHeight = this.perHeight
      const initHeight = formatHeight(el.style.height)
      let totalTimes = (actualHeight - initHeight) / perHeight
      let leaveTimes = totalTimes
      const duration = this.expandDuration / totalTimes
      this._timer = setInterval(() => {
        if (leaveTimes <= 0) {
          clearInterval(this._timer)
          done()
          return
        }

        el.style.height = `${initHeight +
          perHeight * (totalTimes - leaveTimes)}px`
        leaveTimes--
      }, duration)
    },
    afterEnter(el) {
      el.style.height = ''
      el.style.overflowY = ''
    },
    beforeLeave(el) {
      clearInterval(this._timer)
      el.style.overflowY = 'hidden'
    },
    leave(el, done) {
      const actualHeight = el.scrollHeight
      const perHeight = this.perHeight
      const initHeight = formatHeight(el.style.height) || actualHeight
      let totalTimes = initHeight / perHeight
      let leaveTimes = totalTimes
      const duration = this.expandDuration / totalTimes
      this._timer = setInterval(() => {
        if (leaveTimes <= 0) {
          clearInterval(this._timer)
          done()
          return
        }

        el.style.height = `${initHeight -
          perHeight * (totalTimes - leaveTimes)}px`
        leaveTimes--
      }, duration)
    },
    afterLeave(el) {
      el.style.height = ''
      el.style.overflowY = ''
    }
  }
}
</script>
<style lang="scss">
@import '../../../styles/theme-default/src/commons/variables.scss';
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
      padding-right: 3em;
      min-height: 3em;
      p {
        line-height: 2em;
        margin: 0.5em 0;
      }
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
      right: 0.5em;
      top: 0;
      cursor: pointer;
      font-size: 2.5em;
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
}
</style>
