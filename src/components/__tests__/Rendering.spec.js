import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Rendering from '../Rendering.vue'

describe('Rendering', () => {
  it('always render profile link', () => {
    const wrapper = mount(Rendering)
    const profileLink = wrapper.get('#profile')
    expect(profileLink.text()).toBe('My Profile')
  })

  it('does not render an admin link', () => {
    const wrapper = mount(Rendering)
    /**
     * find(): find() 和 get() 很像，一樣是使用 Document.querySelector() 的語法，不過差別在於 find() 沒有找到目標元素時不會拋出錯誤。除非斷言的內容可能不存在，否則盡量都使用 get 而不是 find ，因為如果不存在時就表示真的有錯誤。
     * exist(): 檢查元素是否存在。
    */
    expect(wrapper.find('#admin').exists()).toBe(true)
  })

  it('only render admin link when admin is true', () => {
    const wrapper = mount(Rendering)
    expect(wrapper.get('#admin').text()).toBe('Admin')
  })

  it('does not  show the user dropDown', () => {
    const wrapper = mount(Rendering)
    expect(wrapper.get('#user-dropdown').isVisible()).toBe(false)
  })

  it('render dataset', () => {
    const wrapper = mount(Rendering)
    expect(wrapper.get('[data-test="target"]').text()).toBe('dataset')
  })
})
