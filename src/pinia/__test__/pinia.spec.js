import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useCounterStore } from '../index'
import Home from '@/views/Home.vue'
import { createTestingPinia } from '@pinia/testing'
describe('Counter', () => {
  let store
  beforeEach(() => {
    setActivePinia(createPinia())
    store = useCounterStore()
  })

  it('should increment count', () => {
    store.increment()
    expect(store.count).toBe(1)
    expect(store.doubleCount).toBe(2)
  })
})

describe('vue test pinia', () => {
  // 因此使用 createTestingPinia 作為測試案例的 Pinia 實體時，「預設」 會將所有的 Action 都以模擬替身（stub）的型態替換掉，改為回傳預設值。

  // 倘若你希望能在測試案例中能真實交互 Store 的行為，可以透過 stubActions: false 來關閉對 Store Action 的隔離：

  const wrapper = mount(Home, {
    global: {
      plugins: [
        createTestingPinia(
          {
            stubActions: false
          }
        )
      ]
    }
  })
  it('should increment count', () => {
    const store = useCounterStore()
    store.count = 0
    store.increment()
    expect(store.count).toBe(1)
    expect(store.doubleCount).toBe(2)
  })
})
