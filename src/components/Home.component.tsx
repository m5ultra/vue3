import { computed, ref } from 'vue'
import { ElButton } from 'element-plus'
import './Home.component.styl'
const times = ref(0)

// computed
const doubleTimes = computed(() => times.value * 2)
const useTsx = () => (
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
useTsx.displayName = 'testTsxInVue'
export default useTsx
