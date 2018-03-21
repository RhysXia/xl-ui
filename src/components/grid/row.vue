<script>
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
        return ['flex'].includes(value)
      }
    },
    align: {
      validator(value) {
        return ['top', 'middle', 'bottom'].includes(value)
      }
    },
    justify: {
      validator(value) {
        return [
          'start',
          'end',
          'center',
          'space-around',
          'space-between'
        ].includes(value)
      }
    },
    gutter: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classes() {
      return [
        name,
        this.type ? `${name}--${this.type}` : '',
        this.justify ? `${name}--${this.justify}` : '',
        this.align ? `${name}--${this.align}` : ''
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
<style lang="scss">
@import '../../styles/variables.scss';
@import '../../styles/utils.scss';
.#{$--clsPrefix}-row {
  position: relative;
  box-sizing: border-box;
  @include clearfix;
  &--flex {
    display: flex;
    flex-direction: row;
    &:after {
      display: none;
    }
    &.#{$--clsPrefix}-row--start {
      justify-content: flex-start;
    }
    &.#{$--clsPrefix}-row--end {
      justify-content: flex-end;
    }
    &.#{$--clsPrefix}-row--center {
      justify-content: center;
    }
    &.#{$--clsPrefix}-row--space-around {
      justify-content: space-around;
    }
    &.#{$--clsPrefix}-row--space-between {
      justify-content: space-between;
    }
    &.#{$--clsPrefix}-row--top {
      align-items: flex-start;
    }
    &.#{$--clsPrefix}-row--middle {
      align-items: center;
    }
    &.#{$--clsPrefix}-row--bottom {
      align-items: flex-end;
    }
  }
}
</style>
