<template>
  <h2>Child of info</h2>
  <slot></slot>

  <slot name="header"></slot>

  <!-- <slot name="footer" :list="list"></slot> -->
  <slot name="footer" :list="list"></slot>
</template>

<script setup lang="ts">
const slots = useSlots()
const attrs = useAttrs()
const list: { id: string; content: number }[] = [
  {
    id: '1',
    content: 1,
  },
  {
    id: '2',
    content: 1,
  },
]
onMounted(() => {
  console.log('slots-default', slots.default && slots.default())
  console.log('slots-header', slots.header && slots.header())
  // TODO 如果调用了slots.footer(),  <slot name="footer" :list="list"></slot> 标签上传递的 :list=list 会失效
  // 可以使用这种方法代替: slots.footer({ list })
  console.log('slots-footer', slots.footer && slots.footer({ list }))

  console.log('attrs', attrs)
})
</script>
