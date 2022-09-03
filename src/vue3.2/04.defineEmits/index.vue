<template>
  <h2>父组建</h2>
  <p>{{ num }}</p>
  <p>
    <Info @changeNum="changeNum" />
    <InfoTs @changeNum="changeNum" @parentChange="handleParentChange" />
  </p>
</template>

<script setup lang="ts">
import Info from './info.vue'
import InfoTs from './infoTs.vue'
const num = ref(0)
const changeNum = (val: number) => {
  console.log('val', val)

  num.value++
}
const handleParentChange = () => {
  console.log('parantChange')
}
</script>
