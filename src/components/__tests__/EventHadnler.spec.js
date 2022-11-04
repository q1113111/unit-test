import EvenHandler from '../EvenHandler.vue'
import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'

/**
 * beforeEach：在每個測試案例執行前呼叫一次
   beforeAll：在所有測試案例執行前呼叫一次
   afterEach：在每個測試案例執行後呼叫一次
   afterAll：在所有測試案例執行後呼叫一次

   resetTestingEnv() 清除測試
 */
describe('EvenHandling', () => {
  it('render button', () => {
    const wrapper = mount(EvenHandler)
    expect(wrapper.get('[data-test="button"]').exists()).toBe(true)
  })

  it('The initial value of count is 0', () => {
    const wrapper = mount(EvenHandler)
    expect(wrapper.get('[data-test="count"]').text()).toBe('0')
  })

  it('after click count will be 1', async () => {
    const wrapper = mount(EvenHandler)
    await wrapper.get('[data-test="button"]').trigger('click')
    expect(wrapper.get('[data-test="count"]').text()).toBe('1')
  })

  it('vm count value is 0', async () => {
    const wrapper = mount(EvenHandler)
    expect(wrapper.vm.count).toBe(0)
  })

  it('emits an event when clicked', async () => {
    /**
     * emitted() : emitted() 會回傳一個紀錄元件發出的所有事件的物件，其中也包含著 emit 的參數。
     * toHaveProperty(): jest 有提供一個 toHaveProperty 的匹配器 (matcher)，可以用來檢查物件中是否存在某屬性。
     */
    const wrapper = mount(EvenHandler)
    await wrapper.get('[data-test="button"]').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('increments')
  })

  it('after clicked , it will emit value 1', async () => {
    const wrapper = mount(EvenHandler)
    await wrapper.get('[data-test="button"]').trigger('click')
    const incrementEvent = wrapper.emitted('increments')
    //  toEqual(): toEqual() 匹配器會去比較物件的所有屬性或陣列的所有元素是否相等。
    expect(incrementEvent[0]).toEqual([1])
    expect(incrementEvent).toHaveLength(1)
  })

  it('should be display correct text', async () => {
    const wrapper = mount(EvenHandler)
    await wrapper.find('[data-test="leftButton"]').trigger('click.right')
    expect(wrapper.find('[data-test="result"').text()).toBe('here we go!')
  })
})
