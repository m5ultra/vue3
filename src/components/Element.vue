<template>
  <div class="btns">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </div>
  <Home />
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import Home from './Home.component'

defineComponent({
  name: 'use-element-plus',
  components: {
    Home,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="stylus" scoped>
.btns {
  display flex
  justify-content center
  margin-top 50px
}
</style>
