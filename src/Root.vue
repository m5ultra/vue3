<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <TestUseElement />
  </el-config-provider>
</template>

<script>
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
import TestUseElement from './components/Element.vue'

export default defineComponent({
  name: 'root-component',
  components: {
    ElConfigProvider,
    TestUseElement,
  },
  setup() {
    return {
      zIndex: 3000,
      size: 'default',
    }
  },
})
</script>
