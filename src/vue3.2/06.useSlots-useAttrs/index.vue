<template>
  <h2>useSlots</h2>
  <Info class="test" :data="data">
    <template #default>
      <p>默认插槽</p>
    </template>

    <template #header>
      <p>Header插槽</p>
    </template>

    <template #footer="{ list }">
      <p>Footer插槽</p>
      <h3 v-for="{ id, content } in list" :key="id">
        作用域插槽: {{ id }}, {{ content }}
      </h3>
    </template>
  </Info>
</template>

<script setup lang="ts">
import Info from './info.vue'
const data = ref([{ name: 'Dendi', age: 88 }])
onMounted(() => {})
</script>
