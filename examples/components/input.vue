<template lang="pug">
  .input-example
    h2 input组件
    xl-input(placeholder="basic input")
    br
    xl-input(type='textarea',placeholder="basic textarea")
    br
    xl-input(placeholder="inpue with prepend and append")
      span(slot='prepend') prepend
      span(slot='append') append
    br
    xl-input(disabled,placeholder="disabled")
    br
    xl-input(readonly,placeholder="readonly")
    br
    xl-input(disabled,type="textarea",placeholder="textarea disabled")
    br
    xl-input(readonly,type="textarea",placeholder="textarea readonly")
</template>
<style lang="scss">
</style>
