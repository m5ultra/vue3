// 使用defineProps
<script lang="ts" setup>
// 运行时声明
defineProps({
  title: {
    require: true,
    type: String,
  },
  list: {
    type: Array,
    require: true,
  },
})
</script>

<template>
  <span>{{ title }}</span>
  <p v-for="item in list" :key="item.id">{{ item.id }}, {{ item.content }}</p>
</template>

<style lang="styl" scoped></style>
