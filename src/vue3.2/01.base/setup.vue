<script setup lang="ts">
import { ref } from 'vue'

const count = ref(5)
const handleIncrease = () => {
  count.value += 5
}
</script>

<template>
  <h3>setup</h3>
  <p>
    <span> {{ count }}</span>
  </p>
  <p><el-button @click="handleIncrease" type="success">+</el-button></p>
</template>

<style scoped></style>
