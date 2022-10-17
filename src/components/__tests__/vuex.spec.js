import { createVuexStore } from '@/store'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Vuex from '../Vuex.vue'

describe('Test Component with vuex', () => {
  it('After clicked, value of count will become 0 to 1', async () => {
    const wrapper = mount(Vuex, {
      global: {
        plugins: [createVuexStore()]
      }
    })
    expect(wrapper.text()).toContain('Count: 0')

    await wrapper.get('[data-test="increment"]').trigger('click')
    expect(wrapper.text()).toContain('Count: 1')
  })

  it('The initial value of count is 0', async () => {
    const wrapper = mount(Vuex, {
      global: {
        plugins: [createVuexStore()]
      }
    })

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
    const store = createVuexStore({ count: 10 })
    store.commit('increment')
    expect(store.getters.count).toBe(11)
  })
})
