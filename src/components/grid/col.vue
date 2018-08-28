<script>
import { breakpoints } from './media-query'
const mediaProps = {}
breakpoints.forEach(key => {
  mediaProps[key] = [Number, Object]
})

const name = 'xl-col'
export default {
  name: name,
  inject: ['xlRow'],
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number
    },
    offset: {
      type: Number
    },
    push: {
      type: Number
    },
    pull: {
      type: Number
    },
    order: {
      type: Number
    },
    ...mediaProps
  },
  computed: {
    gutter() {
      return this.xlRow.actualGutter
    },
    classes() {
      let classList = [name]
      let props = ['span', 'offset', 'pull', 'push']
      props.forEach(prop => {
        if (this[prop] || this[prop] === 0) {
          if (prop === 'span') {
            classList.push(`${name}-${this[prop]}`)
          } else {
            classList.push(`${name}-${prop}-${this[prop]}`)
          }
        }
      })

      breakpoints.forEach(size => {
        if (typeof this[size] === 'number') {
          classList.push(`${name}-${size}-${this[size]}`)
        } else if (typeof this[size] === 'object') {
          let props = this[size]
          Object.keys(props).forEach(prop => {
            if (prop === 'span') {
              classList.push(`${name}-${size}-${props[prop]}`)
            } else {
              classList.push(`${name}-${size}-${prop}-${props[prop]}`)
            }
          })
        }
      })
      return classList
    },
    styles() {
      let style = {}
      if (this.gutter !== 0) {
        style = {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px'
        }
      }
      if (this.order !== undefined) {
        style.order = this.order
      }
      return style
    }
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
