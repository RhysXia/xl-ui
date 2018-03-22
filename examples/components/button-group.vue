<template lang="pug">
    .button-group-example
        h2 button group组件
        xl-button-group
            xl-button button1
            xl-button button2
        br
        xl-button-group
            xl-button button1
            xl-button(type='success') button2
        br
        xl-button-group
            xl-button button1
            xl-button(type='success') button2
            xl-button(type='primary') button3
        br
        xl-button-group(vertical)
            xl-button button1
            xl-button button2
        br
        xl-button-group(vertical)
            xl-button button1
            xl-button(type='success') button2
            xl-button(type='primary') button3
</template>
<script>
export default {}
</script>
<style lang="scss">
.button-group-example {
  display: flex;
  .xl-button-group {
    margin: 0.5em;
  }
}
</style>
