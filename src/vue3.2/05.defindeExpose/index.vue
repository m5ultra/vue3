<template>
  <h3>defineExpose</h3>
  <Info ref="infoRef" />
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import Info from './info.vue'
const infoRef = ref<{ count: Ref<number>; change:() => void } | null>(null)
nextTick(() => {
  console.log(infoRef.value?.count, 'oOo')
  console.log(infoRef.value?.change, 'oOo')
})
</script>
