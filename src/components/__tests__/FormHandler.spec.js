import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FormHandler from '../FormHanlder.vue'

describe('FormHandler', () => {
  it('value of input should be my@mail.com', async () => {
    const wrapper = mount(FormHandler)
    const input = wrapper.get('[data-mail="email"]')
    await input.setValue('my@mail.com')
    /**
     * setValue(): 要更改表單元素的值可以使用 setValue() 方法，setValue 接受一個參數，可以是字串或布林值，並且回傳的是一個 Promise。
     * DOMWrapper: 透過 get() 或是 find() 成功找到目標元素時都會回傳一個圍繞 Wrapper API 的 DOM 元素的瘦包裝器 (thin wrapper)，而它有一個代表著 HTMLElement 的屬性 element，又因為在上面的情況目標元素為 input tag 所以此時 element 真實的值其實為 HTMLInputElement。
     */
    expect(input.element.value).toBe('my@mail.com')
  })

  it('after set value, value of mail should be my@mail.com', async () => {
    const wrapper = mount(FormHandler)
    await wrapper.get('[data-mail="email"]').setValue('my@mail.com')
    expect(wrapper.vm.email).toBe('my@mail.com')
  })

  it('fill up form', async () => {
    const wrapper = mount(FormHandler)

    const email = 'name@mail.com'
    const description = 'Lorem ipsum dolor sit ames'
    const city = 'taipei'
    const subscribe = true

    await wrapper.get('[data-test="email"]').setValue(email)
    await wrapper.get('[data-test="description"]').setValue(description)
    await wrapper.get('[data-test="city"]').setValue(city)
    await wrapper.get('[data-test="subscribe"]').setValue()
    await wrapper.get('[data-test="radio_1"]').setValue(true)
    await wrapper.get('[data-test="interval.weekly"]').setValue()

    // 在呼叫 setValue 的對象為 OPTION、CHECKBOX 或 RADIO 時， 如果沒有傳參數給 setValue 則表示為 checked 。
    expect(wrapper.vm.form).toEqual({
      email,
      description,
      city,
      subscribe,
      radioResult: "1",
      interval: 'weekly'
    })
  })

  it('submits the form', async () => {
    const wrapper = mount(FormHandler)
    const email = 'name@mail.com'
    const description = 'Lorem ipsum dolor sit amet'
    const city = 'taipei'
    const subscribe = true
    await wrapper.get('[data-test="email"]').setValue(email)
    await wrapper.get('[data-test="description"]').setValue(description)
    await wrapper.get('[data-test="city"]').setValue(city)
    await wrapper.get('[data-test="subscribe"]').setValue(subscribe)
    await wrapper.get('[data-test="interval.monthly"]').setValue()
    await wrapper.get('[data-test="radio_1"]').setValue(true)
    await wrapper.get('[data-test="form"]').trigger('submit.prevent')

    expect(wrapper.emitted('submit')[0][0]).toEqual({
      email,
      description,
      city,
      subscribe,
      radioResult:"1",
      interval: 'monthly'
    })
  })
})
