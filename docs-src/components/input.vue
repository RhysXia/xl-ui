<template lang="pug">
  .input-example
    h2 input组件
    xl-input(placeholder="basic input")
    br
    xl-input(type='textarea',placeholder="basic textarea")
    br
    xl-input(placeholder="inpue with prefix and suffix")
      span(slot='prefix') prefix
      span(slot='suffix') suffix
    br
    xl-input(disabled,placeholder="disabled")
    br
    xl-input(readonly,placeholder="readonly")
    br
    xl-input(disabled,type="textarea",placeholder="textarea disabled")
    br
    xl-input(readonly,type="textarea",placeholder="textarea readonly")
    br
    xl-input(type="textarea",placeholder="textarea autosize",autosize)
    br
    xl-input(type="textarea",placeholder="textarea autosize object",:autosize="{minRows:5,maxRows:10}")
    br
    xl-input(clearable,placeholder='clearable')
    br
    xl-input(suffix-icon='arrow-swap',prefix-icon='arrow-swap',placeholder='suffix-icon prefix-icon')
    br
    xl-input(suffix-icon='arrow-swap',clearable,placeholder='suffix-icon with clearable')
    br
    xl-input(suffix-icon='arrow-swap',clearable,placeholder='suffix-icon with clearable and suffix')
      span(slot='prefix') prefix
      span(slot='suffix') suffix
</template>
<style lang="scss">
</style>
