import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import router from '../index'
import Home from '@/views/Home.vue'
import { createTestingPinia } from '@pinia/testing'
describe('home vue', () => {
  beforeEach(async () => {
    router.push('/')
    await router.isReady()
  })

  it('should go to edit page click button if user is Login', async () => {
    // arrange
    const wrapper = mount(Home, {
      props: {
        isUserLogin: true
      },
      global: {
        plugins: [router, createTestingPinia()]
      }
    })

    // act
    const spyPush = vi.spyOn(router, 'push')
    await wrapper.find('[data-test="button"]').trigger('click')

    // assert
    expect(spyPush).toBeCalledWith({ name: 'Edit' })
  })

  it('should go to login page when click button if user is not Login', async () => {
    const wrapper = mount(Home, {
      props: {
        isUserLogin: false
      },
      global: {
        plugins: [router]
      }
    })

    const spyPush = vi.spyOn(router, 'push')
    await wrapper.find('[data-test="button"]').trigger('click')
    expect(spyPush).toHaveBeenCalledWith({ name: 'Login' })
  })
})
