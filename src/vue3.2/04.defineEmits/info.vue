<template>
  <div>Child of info</div>
  <el-button @click="handleInvoke">调用父组建的方法</el-button>
</template>

<script setup lang="ts">
const emits = defineEmits(['changeNum'])
const handleInvoke = () => {
  emits('changeNum', 88)
}
</script>

<style scoped></style>
