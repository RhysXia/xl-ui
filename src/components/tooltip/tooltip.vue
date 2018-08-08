<template lang="pug">
  div(v-clickoutside="_clickoutside",@mouseleave="_mouseleave",@mouseenter="_mouseenter")
    Poptip(:pop-class="popClass",v-model="visible",:transfer="transfer",:width="width",:padding="padding",:trigger="custom")
      div(@click="_click")
        slot
      template(slot="content") {{content}}
</template>
<script>
import Poptip from "../poptip";
import clickoutside from "../../directives/clickoutside";
import { oneOf } from "../../utils/array";

const name = "xl-tooltip";
export default {
  name,
  directives: {
    clickoutside
  },
  props: {
    transfer: {
      type: Boolean,
      default: true
    },
    content: String,
    trigger: {
      default: "hover",
      validator(val) {
        return oneOf(["hover", "click"], val);
      }
    },
    width: {
      type: [String, Number, Object],
      default: () => ({
        min: 150,
        max: 300
      })
    },
    padding: {
      type: String,
      default: "0.5em 1em"
    }
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    popClass() {
      return `${name}__popper`;
    }
  },
  methods: {
    _clickoutside() {
      this.visible = false;
    },
    _mouseleave() {
      if (this.trigger === "hover") {
        this.visible = false;
      }
    },
    _mouseenter() {
      if (this.trigger === "hover") {
        this.visible = true;
      }
    },
    _click() {
      if (this.trigger === "click") {
        this.visible = true;
      }
    }
  },
  mounted() {},
  components: {
    Poptip
  }
};
</script>
