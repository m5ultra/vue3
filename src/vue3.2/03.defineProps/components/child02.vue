// 使用defineProps
<script lang="ts" setup>
// 运行时声明
const props = withDefaults(
  defineProps<{
    title?: string
    list: { id: number; content: string }[]
  }>(),
  { title: '默认标题' }
)
console.log('list', props.list)
console.log('title', props.title)
</script>

<template>
  <span>{{ title }}</span>
  <p v-for="item in list" :key="item.id">{{ item.id }}, {{ item.content }}</p>
</template>

<style lang="styl" scoped></style>
