<script>
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
  data() {
    return {
      prefixCls: name
    }
  },
  computed: {
    gutter() {
      return this.xlRow.gutter
    },
    classes() {
      let classList = [this.prefixCls]
      let props = ['span', 'offset', 'pull', 'push']
      props.forEach(prop => {
        if (this[prop] || this[prop] === 0) {
          if (prop === 'span') {
            classList.push(`${this.prefixCls}-${this[prop]}`)
          } else {
            classList.push(`${this.prefixCls}-${prop}-${this[prop]}`)
          }
        }
      })

      props = ['xs', 'sm', 'md', 'lg', 'xl']
      props.forEach(size => {
        if (typeof this[size] === 'number') {
          classList.push(`${this.prefixCls}-${size}-${this[size]}`)
        } else if (typeof this[size] === 'object') {
          let props = this[size]
          Object.keys(props).forEach(prop => {
            classList.push(`${this.prefixCls}-${size}-${prop}-${props[prop]}`)
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
<style lang="scss">
@import '../../styles/variables.scss';

@mixin col($prefix, $type, $number) {
  @if ($type==span) {
    $type: #{''};
  } @else {
    $type: -#{$type};
  }
  .#{$prefix}#{$type}-0 {
    display: none;
  }
  @for $i from 1 through $number {
    .#{$prefix}#{$type}-#{$i} {
      width: $i / $number * 100%;
    }
    .#{$prefix}#{$type}-pull-#{$i} {
      position: relative;
      right: $i / $number * 100%;
    }
    .#{$prefix}#{$type}-offset-#{$i} {
      margin-left: $i / $number * 100%;
    }
    .#{$prefix}#{$type}-push-#{$i} {
      position: relative;
      left: $i / $number * 100%;
    }
  }
}

@mixin media-col($prefix, $breakpoints) {
  @each $key in map_keys($breakpoints) {
    @media only screen and #{map_get($breakpoints,$key)} {
      @include col($prefix, $key, 24);
    }
  }
}

.xl-col {
  float: left;
  box-sizing: border-box;
}

@include col(#{$--clsPrefix}-col, span, 24);
@include media-col(#{$--clsPrefix}-col, $--grid-breakpoints);
</style>
