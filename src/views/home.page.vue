<script setup lang="ts">
import { ref, defineComponent } from 'vue'
import { useStore } from '../store/useStore'
import Home from '../components/Home.component'
const store = useStore()
const data = ref({ name: 'Dendi', age: 88 })
defineComponent({
  name: 'v-home',
  components: {
    Home,
  },
})
const handleIncrement = () => {
  store.counter++
}
</script>

<template>
  <p class="detail">{{ data.name }} - {{ data.age }}</p>
  <h2>{{ store.counter }}</h2>
  <el-button type="success" @click="handleIncrement">Increment++</el-button>
  <Home />
</template>

<style lang="stylus" scoped>
.detail {
  color: crimson
  font-size: 20px
}
</style>
