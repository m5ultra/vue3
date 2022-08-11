import { defineComponent, computed, ref } from 'vue'
import { ElButton } from 'element-plus'
import './Home.component.styl'
export default defineComponent({
  name: 'home-component',
  setup() {
    const times = ref(0)
    // computed
    const doubleTimes = computed(() => times.value * 2)
    return () => (
      <div class={'tsx-home'}>
        <h2> This is tsx component </h2>
        <div class={'box'}>
          <div class={'item'}>{times.value}</div>
          <div class={'item'}>{doubleTimes.value}</div>
        </div>
        <p style={{ textAlign: 'center' }}>
          <ElButton
            type={'primary'}
            onClick={() => {
              times.value++
            }}
          >
            Increment
          </ElButton>
        </p>
      </div>
    )
  },
})
