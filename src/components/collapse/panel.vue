<template lang="pug">
    div(:class="classes")
        div(:class="headerClasses",@click="click")
            Icon(:class="iconClasses",type="chevron-right",v-if="!isHiddenArrow")
            slot(name="title") {{title}}
        CollapseTransition
          div(:class="bodyClasses",v-show="isActived")
            slot
</template>
<script>
import { oneOf } from '@/utils/array'
import Icon from '../icon'
import CollapseTransition from '../base/collapse-transition'
const name = 'xl-panel'
export default {
  name,
  inject: ['xlCollapse'],
  props: {
    title: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    hideArrow: {
      type: Boolean,
      default: undefined
    }
  },
  computed: {
    classes() {
      const arr = [name]
      return arr
    },
    headerClasses() {
      const arr = [`${name}__header`]
      return arr
    },
    iconClasses() {
      const arr = [`${name}__header__icon`]
      if (this.isActived) {
        arr.push(`${name}__header__icon--actived`)
      }
      return arr
    },
    bodyClasses() {
      const arr = [`${name}__body`]
      return arr
    },
    isActived() {
      const activeIndex = this.xlCollapse.activeIndex
      if (this.isAccordion) {
        return activeIndex === this.index
      }
      return activeIndex && oneOf(activeIndex, this.index)
    },
    isAccordion() {
      return this.xlCollapse.accordion
    },
    isHiddenArrow() {
      if (this.hideArrow !== undefined) {
        return this.hideArrow
      }
      return this.xlCollapse.hideArrow
    }
  },
  methods: {
    click() {
      if (this.isAccordion) {
        if (this.isActived) {
          this.xlCollapse.activeIndex = null
        } else {
          this.xlCollapse.activeIndex = this.index
        }
      } else {
        let activeIndex = this.xlCollapse.activeIndex
        if (!activeIndex) {
          activeIndex = []
        }
        activeIndex = activeIndex.filter(it => it !== this.index)
        if (!this.isActived) {
          activeIndex.push(this.index)
        }
        this.xlCollapse.activeIndex = activeIndex
      }
    }
  },
  components: {
    Icon,
    CollapseTransition
  }
}
</script>
