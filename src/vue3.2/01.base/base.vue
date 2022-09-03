<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const count = ref(5)
    const handleIncrease = () => {
      count.value += 5
    }
    return {
      count,
      handleIncrease,
    }
  },
})
</script>

<template>
  <p>
    <span> {{ count }}</span>
  </p>
  <p><el-button @click="handleIncrease" type="primary">+</el-button></p>
</template>

<style scoped></style>
