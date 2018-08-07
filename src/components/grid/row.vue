<script>
import { oneOf } from '../../utils/array'
import { breakpointMap, breakpoints } from './media-query'
let enquire
if (typeof window !== 'undefined') {
  const matchMediaPolyfill = mediaQuery => {
    return {
      media: mediaQuery,
      matches: false,
      addListener() {},
      removeListener() {}
    }
  }
  window.matchMedia = window.matchMedia || matchMediaPolyfill
  enquire = require('enquire.js')
}
const screens = {}
breakpoints.forEach(key => (screens[key] = false))
const name = 'xl-row'
export default {
  name,
  provide() {
    return {
      xlRow: this
    }
  },
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    type: {
      validator(value) {
        return oneOf(['flex'], value)
      }
    },
    align: {
      validator(value) {
        return oneOf(['top', 'middle', 'bottom'], value)
      }
    },
    justify: {
      validator(value) {
        return oneOf(
          ['start', 'end', 'center', 'space-around', 'space-between'],
          value
        )
      }
    },
    gutter: {
      type: [Number, Object],
      default: 0
    }
  },
  data() {
    return {
      prefixCls: name,
      screens
    }
  },
  computed: {
    classes() {
      return [
        name,
        this.type ? `${this.prefixCls}--${this.type}` : '',
        this.justify ? `${this.prefixCls}--${this.justify}` : '',
        this.align ? `${this.prefixCls}--${this.align}` : ''
      ]
    },
    actualGutter() {
      const gutter = this.gutter
      if (typeof gutter === 'number') {
        return gutter
      }
      if (typeof gutter === 'object') {
        const screens = this.screens
        console.log(screens)
        for (let i = 0; i < breakpoints.length; i++) {
          const key = breakpoints[i]
          if (screens[key] && gutter[key]) {
            return gutter[key]
          }
        }
      }
      return 0
    },
    styles() {
      let style = {}
      if (this.actualGutter) {
        style = {
          marginLeft: this.actualGutter / -2 + 'px',
          marginRight: this.actualGutter / -2 + 'px'
        }
      }
      return style
    }
  },
  mounted() {
    Object.keys(breakpointMap).forEach(key =>
      enquire.register(breakpointMap[key], {
        match: () => {
          this.screens[key] = true
        },
        unmatch: () => {
          this.screens[key] = false
        },
        destroy() {}
      })
    )
  },
  beforeDestroy() {
    Object.keys(breakpointMap).map(key =>
      enquire.unregister(breakpointMap[key])
    )
  },
  render(h) {
    return h(
      this.tag,
      {
        style: this.styles,
        class: this.classes
      },
      this.$slots.default
    )
  }
}
</script>
