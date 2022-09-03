<script setup lang="ts">
import Foo from './dynamic/Foo.vue'
import Bar from './dynamic/Bar.vue'
// 命名空间组建 01.模块统一导出  02.导入 03. Base.Foo 使用
import * as Base from './dynamic'

const condition = ref(false)
const handleClick = () => {
  condition.value = !condition.value
}
</script>

<template>
  <h3>动态组建</h3>
  <component :is="condition ? Foo : Bar" />
  <component :is="condition ? Base.Foo : Base.Bar" />
  <el-button type="primary" @click="handleClick">动态组建切换</el-button>
</template>

<style scoped></style>
