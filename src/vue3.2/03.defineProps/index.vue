// 使用defineProps
<script lang="ts" setup>
import Child from './components/child.vue'
import ChildTs from './components/child02.vue'
const list = [
  {
    id: 1,
    content: '1',
  },
  {
    id: 2,
    content: '2',
  },
]
</script>

<template>
  <h1>defineProps</h1>
  <Child :list="list" title="runtime" />
  <ChildTs :list="list" />
</template>

<style lang="styl" scoped></style>
