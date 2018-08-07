<template lang="pug">
  div(:class="classes")
    div(ref="reference",:class="refClasses")
      slot
    transition(:name="transitionName")
      div(:class="popClasses",ref="popper",:data-transfer="transfer", v-transfer-dom="")
        div(:class="arrowClasses" x-arrow)
        div(:class="contentClasses")
          div(:class="titleClasses")
            slot(name="title") {{title}}
          div(:class="bodyClasses")
            slot(name="body") {{content}}
          div(:class="footerClasses")
            slot(name="footer")
</template>
<script>
import Popper from '../../mixins/popper'
import transferDom from '../../directives/transfer-dom'
const name = 'xl-poptip'
export default {
  name,
  mixins: [Popper],
  directives: {
    transferDom
  },
  props: {
    transfer: {
      type: Boolean,
      default: false
    },
    title: String,
    content: String
  },
  data() {
    return {}
  },
  computed: {
    classes() {
      const arr = [name]
      return arr
    },
    refClasses() {
      return `${name}__ref`
    },
    popClasses() {
      return `${name}__popper`
    },
    arrowClasses() {
      return `${name}__popper__arrow`
    },
    contentClasses() {
      return `${name}__popper__content`
    },
    titleClasses() {
      return `${name}__popper__title`
    },
    bodyClasses() {
      return `${name}__popper__body`
    },
    footerClasses() {
      return `${name}__popper__footer`
    },
    transitionName() {
      return `${name}-fade`
    }
  },
  mounted() {
    this.$nextTick(() => this.updatePopper())
    console.log(this)
  }
}
</script>
