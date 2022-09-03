<script setup lang="ts">
const isSel = ref<boolean>(false)

let selStyl = reactive({
  fontSize: '24px',
  color: 'black',
})

const handleClick = () => {
  isSel.value = !isSel.value
}

const handleSwitch = () => {
  // selStyl = Object.assign({}, selStyl, { fontSize: '28px', color: 'green' }) not work
  selStyl = Object.assign(selStyl, { fontSize: '28px', color: 'green' })
  // selStyl.fontSize = '28px'
  // selStyl.color = 'green'
  console.log(selStyl)
}
</script>
<template>
  <p><span :class="isSel ? 'isActive' : ''">Hi</span></p>
  <p><el-button type="warning" @click="handleClick">Switch Color</el-button></p>
  <p><el-button type="primary" @click="handleSwitch">Switch 2</el-button></p>
  <p><span class="isCurrent">v-bind</span></p>
</template>

<style lang="stylus" scoped>

.isActive {
  color red
  font-size 24px
}

.isCurrent {
  font-size v-bind('selStyl.fontSize')
  color v-bind('selStyl.color')
}
</style>
