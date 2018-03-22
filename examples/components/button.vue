<template lang="pug">
  .button-example
    h2 button组件
    xl-button(type='default') default
    xl-button(type='default',disabled) defalut disabled
    xl-button(type='default',disabled,plain) defalut disabled plain
    xl-button(type='default',round) default round
    xl-button(type='default',plain) default plain
    xl-button(type='default',long) default long
    br
    xl-button(type='success') success
    xl-button(type='success',disabled) success disabled
    xl-button(type='success',disabled,plain) success disabled plain
    xl-button(type='success',round) success round
    xl-button(type='success',plain) success plain
    xl-button(type='success',long) success long
    br
    xl-button(type='primary') primary
    xl-button(type='primary',disabled) primary disabled
    xl-button(type='primary',disabled,plain) primary disabled plain
    xl-button(type='primary',round) primary round
    xl-button(type='primary',plain) primary plain
    xl-button(type='primary',long) primary long
    br
    xl-button(type='warning') warning
    xl-button(type='warning',disabled) warning disabled
    xl-button(type='warning',disabled,plain) warning disabled plain
    xl-button(type='warning',round) warning round
    xl-button(type='warning',plain) warning plain
    xl-button(type='warning',long) warning long
    br
    xl-button(type='error') error
    xl-button(type='error',disabled) error disabled
    xl-button(type='error',disabled,plain) error disabled plain
    xl-button(type='error',round) error round
    xl-button(type='error',plain) error plain
    xl-button(type='error',long) error long
    br
    xl-button(type='info') info
    xl-button(type='info',disabled) info disabled
    xl-button(type='info',disabled,plain) info disabled plain
    xl-button(type='info',round) info round
    xl-button(type='info',plain) info plain
    xl-button(type='info',long) info long
    br
    xl-button(type='text') text
    xl-button(type='text',disabled) text disabled
    xl-button(type='text',disabled,plain) text disabled plain
    xl-button(type='text',round) text round
    xl-button(type='text',plain) text plain
    xl-button(type='text',long) text long
    br
    xl-button
      xl-icon(type='locked')
    xl-button(round)
      xl-icon(type='locked')
</template>
<script>
export default {}
</script>
<style lang="scss">
.button-example {
  .xl-button {
    margin: 0.5em;
  }
}
</style>
