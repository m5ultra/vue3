<template>
  <div class="btns">
    <el-button
      @click="
        () => {
          this.$router.push('pinia')
        }
      "
      >Pinia</el-button
    >
    <el-button
      @click="
        () => {
          this.$router.push('tsx')
        }
      "
      type="primary"
      >TSX 测试</el-button
    >
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </div>
  <router-view />
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'use-element-plus',
  setup() {
    return {}
  },
})
</script>

<style lang="stylus" scoped>
.btns {
  display flex
  justify-content center
  margin-top 25px
}
</style>
