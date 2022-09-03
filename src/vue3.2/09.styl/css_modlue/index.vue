<script setup lang="ts">
// css module 使用
const module = useCssModule('how-to-use-css-module')
console.log(module, 'color')
</script>
<template>
  <div :class="module?.['use-css-module']">
    <p :class="module.title">css module</p>
  </div>
</template>

<style lang="stylus" module="how-to-use-css-module" scoped>
.use-css-module {
   background antiquewhite
}
.title {
  color red
  font-size 24px
}
</style>
