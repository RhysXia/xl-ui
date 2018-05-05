<script>
import { oneOf } from '../../utils/utils'
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
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      prefixCls: name
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
    styles() {
      let style = {}
      if (this.gutter) {
        style = {
          marginLeft: this.gutter / -2 + 'px',
          marginRight: this.gutter / -2 + 'px'
        }
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
