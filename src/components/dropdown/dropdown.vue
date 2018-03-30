<template lang="pug">
    Popup(:placement="placement",:popupContainer="popupContainer")
        div(:class='refClasses',@click='_clickHandler')
            slot
        slot(name="popup")
            div(v-show="visiable",slot="dropdown")
</template>
<script>
import Popup from '../popup'
import clickoutside from '@/directives/clickoutside'
const name = 'xl-dropdown'
export default {
  name,
  directives: {
    clickoutside
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: String,
      default: 'hover',
      validator(val) {
        return ['hover', 'click'].includes(val)
      }
    },
    popupContainer: {
      type: Function,
      default: () => document.body
    },
    hideOnClick: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'top',
      validator(val) {
        return [
          'top',
          'top-start',
          'top-end',
          'bottom',
          'bottom-start',
          'bottom-end',
          'left',
          'left-start',
          'left-end',
          'right',
          'right-start',
          'right-end'
        ].includes(val)
      }
    }
  },
  data() {
    return {
      visiable: this.value
    }
  },
  watch: {
    value(val) {
      this.visiable = val
    },
    visiable(val) {
      this.$emit('input', val)
    }
  },
  computed: {
    refClasses() {
      const arr = [`${name}__ref`]
      return arr
    }
  },
  methods: {
    _clickHandler() {
      this.visiable = true
    }
  },
  components: {
    Popup
  }
}
</script>
<style lang="scss">
@import '../../styles/variables.scss';
.#{$--clsPrefix}-dropdown__ref {
  display: inline-block;
}
</style>
