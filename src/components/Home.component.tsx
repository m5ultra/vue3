import { computed, ref } from 'vue'
import { ElButton, ElInput } from 'element-plus'
import './Home.component.styl'
import ChildTsx from './child-tsx'

const times = ref(0)
const doubleTimes = computed(() => times.value * 2)
const inputVal = reactive({ name: '' })
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
    <p>指令01: v-model</p>
    <ElInput v-model={inputVal.name} />
    <p>Input输入内容： {inputVal.name}</p>
    <hr />
    {/* <ChildTsx {...times}></ChildTsx> */}
    <ChildTsx times={times} {...times}></ChildTsx>
  </div>
)

useTsx.displayName = 'testTsxInVue'
export default useTsx
