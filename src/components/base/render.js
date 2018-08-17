export default {
  functional: true,
  props: {
    render: {
      type: Function,
      default: () => null
    }
  },
  render: (h, ctx) => {
    return ctx.props.render(h)
  }
}
