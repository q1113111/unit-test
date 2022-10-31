import { mount, shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Rendering from '../Rendering.vue'
import ShallowMount from '../ShallowMount.vue'
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

  it('render isRef',()=>{
    const wrapper = mount(Rendering)
    expect(wrapper.get({ ref: 'isRef' }).text()).toBe('isRef')
  })

  it('render findAll',()=>{
    const wrapper = mount(Rendering)
    const target = wrapper.findAll('.test')
    expect(target[0].text()).toBe('dataset')
    expect(target[1].text()).toBe('isRef')

  })
})

it('should render corrent content',()=>{
  const wrapper =shallowMount(ShallowMount)
  expect(wrapper.html()).toBe(`<div data-test="target"> Root <shallow-child-stub></shallow-child-stub>
</div>`)
})

it('text', () => {
  const wrapper = mount(ShallowMount)
  expect(wrapper.find('[data-test="target"]').text()).toBe('Root body')

  const shallow = shallowMount(ShallowMount)
  expect(shallow.find('[data-test="target"]').text()).toBe('Root')
})

it('exist',()=>{
  //判斷元素是否存在
  const wrapper =  mount(Rendering)
  expect(wrapper.find('p').exists()).toBe(false)
  expect(wrapper.find('ul').exists()).toBe(true)
})

it('isViable 用來判斷v-show',()=>{
  const wrapper = mount(Rendering)
  expect(wrapper.find('[data-test="target"').isVisible()).toBeTruthy()
  expect(wrapper.find({ref:'isRef'}).isVisible()).toBeFalsy()
})

it('attributes',()=>{
  const wrapper = mount(Rendering)
  wrapper.find('#profile').attributes('href')
})

it('classes',()=>{
  const wrapper = mount(Rendering)
  expect(wrapper.find('[data-test="target"]').classes()).toContain('ss')
})

