import { mount } from '@vue/test-utils'
import { expect, it, vi } from 'vitest'
import Fetcher from '../Fetcher.vue'
import flushPromises from 'flush-promises';
const mockGet = vi.fn()

mockGet('@/api/request.js')

it.only('makes an api call', async () => {
  const wrapper = mount(Fetcher)
  await wrapper.find('.btn').trigger('click'); // 触发click事件
  // await flushPromises()// 等待异步完成
  expect(mockGet).toHaveBeenCalled()
  expect(wrapper.find('.name').text()).toBe('李四');
})
