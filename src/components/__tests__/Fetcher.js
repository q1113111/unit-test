import { mount } from '@vue/test-utils'
import { expect, it, vi } from 'vitest'
import Fetcher from '../Fetcher.vue'

const mockGet = vi.fn()

vi.mock('axios', () => ({
  get: () => mockGet()
}))

it('makes an api call', async () => {
  const wrapper = mount(Fetcher)
  expect(mockGet).toHaveBeenCalledTimes(1)
})
