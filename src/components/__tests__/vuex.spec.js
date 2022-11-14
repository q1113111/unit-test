import {createVuexStore} from '@/store'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Vuex from '../Vuex.vue'

const factory = () => {
  const store = createVuexStore({ count: 10 })
  return mount(Vuex, {
    global: {
      plugins: [store]
            // plugins: [createVuexStore({ count: 10 })]
    }
  })
}
describe('Test Component with vuex', () => {
  it.only('After clicked, value of count will become 0 to 1', async () => {
    const wrapper = factory()
    expect(wrapper.text()).toContain('Count: 10')

    await wrapper.get('[data-test="increment"]').trigger('click')
    expect(wrapper.text()).toContain('Count: 11')
  })

  it('The initial value of count is 0', async () => {
    const wrapper = factory()

    // current: state: { count: 1 }
    expect(wrapper.html()).toContain('Count: 0')
  })
})

describe('Testing Vuex in Isolation', () => {
  it('increment: 0 -> 1', () => {
    const store = createVuexStore()
    store.commit('increment')
    expect(store.getters.count).toBe(1)
  })

  it('increment: 10 -> 11', () => {
    const store = createVuexStore()
    store.commit('setCount', 10)
    store.commit('increment')
    expect(store.getters.count).toBe(11)
  })
})
