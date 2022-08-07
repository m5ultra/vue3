import { defineComponent, computed, ref } from 'vue'
import { ElButton } from 'element-plus'

export default defineComponent({
  name: 'home-component',
  setup() {
    const times = ref(0)
    const doubleTimes = computed(() => times.value * 2)
    return () => (
      <div>
        <h2> +1S </h2>
        <ElButton
          type={'primary'}
          onClick={() => {
            times.value++
          }}
        >
          Times+1
        </ElButton>
        <div>{times.value}</div>
        <div>{doubleTimes.value}</div>
      </div>
    )
  },
})
