<template>
  <div>Child of info Ts</div>
  <el-button @click="handleInvoke">调用父组建的方法</el-button>
</template>

<script setup lang="ts">
// eslint-disable-next-line
const emits = defineEmits<{
  // eslint-disable-next-line
  (e: 'changeNum', data: number): void
  // eslint-disable-next-line
  (e: 'parentChange'): void
}>()
const handleInvoke = () => {
  emits('changeNum', 88)
}
</script>
