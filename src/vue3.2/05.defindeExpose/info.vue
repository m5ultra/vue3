<template>
  <h3>Child of Info defineExpose</h3>
  <el-button @click="change">默認暴漏</el-button>
</template>

<script setup lang="ts">
const count = ref(0)
const change = () => {
  console.log('child of info ref: ', count)
}
defineExpose({
  count,
  change,
})
</script>
