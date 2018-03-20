
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
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object]
  },
  computed: {
    gutter () {
      return this.xlRow.gutter
    },
    classes () {
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

      props = ['xs', 'sm', 'md', 'lg', 'xl']
      props.forEach(size => {
        if (typeof this[size] === 'number') {
          classList.push(`${name}-${size}-${this[size]}`)
        } else if (typeof this[size] === 'object') {
          let props = this[size]
          Object.keys(props).forEach(prop => {
            classList.push(`el-col-${size}-${prop}-${props[prop]}`)
          })
        }
      })
      return classList
    },
    styles () {
      let style = {}
      if (this.gutter !== 0) {
        style = {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px'
        }
      }
      return style
    }
  },
  render (h) {
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
