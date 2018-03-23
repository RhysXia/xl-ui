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
    br
    xl-input(type="textarea",placeholder="textarea autosize",autosize)
    br
    xl-input(type="textarea",placeholder="textarea autosize object",:autosize="{minRows:5,maxRows:10}")
    br
    xl-input(clearable,placeholder='clearable')
    br
    xl-input(icon='arrow-swap',placeholder='icon')
    br
    xl-input(icon='arrow-swap',clearable,placeholder='icon with clearable')
    br
    xl-input(icon='arrow-swap',clearable,placeholder='icon with clearable and append')
      span(slot='prepend') prepend
      span(slot='append') append
</template>
<style lang="scss">
</style>
