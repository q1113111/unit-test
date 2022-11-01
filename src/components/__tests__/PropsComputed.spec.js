import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import PropsComputed from '../PropsComputed.vue'
// import Props from '../Props.vue'
describe('Props & Computed', () => {
  let wrapper
  const minLength = 6
  // beforeEach() : 在每一個 test() 執行前運行的一個函式，常會用來初始化 wrapper 。
  beforeEach(() => {
    wrapper = mount(PropsComputed, {
      props: {
        minLength
      }
    })
  })
  // Case 1: 密碼在大於或等於最短長度限制時，不會出現錯誤訊息。
  it(`not renders an error if length is more than or equal to ${minLength}`, async () => {
    await wrapper.get('[data-test="password"]').setValue('123456')
    expect(wrapper.find('[data-test="errorMsg"]').exists()).toBe(false)
  })

  // Case 2: 密碼少於最短長度限制時，出現錯誤訊息。
  it(`renders an error if length is less than ${minLength}`, async () => {
    await wrapper.get('[data-test="password"]').setValue('12345')
    // expect(wrapper.find('[data-test="errorMsg"]').exists()).toBe(true)
    expect(wrapper.text()).toContain(`Password must be at least ${minLength} characters.`)
  })

  // Case 3: 當 showError 為 false 時，不顯示錯誤訊息。
  it('not renders an error if showError is false ', async () => {
    await wrapper.get('[data-test="password"]').setValue('12345')
    expect(wrapper.text()).toContain(`Password must be at least ${minLength} characters.`)

    // setProps(): 在 wrapper 生成後，動態的改變 props 的值。
    await wrapper.setProps({ showError: false })
    expect(wrapper.find('[data-test="errorMsg"').exists()).toBe(false)
  })

  it('setProps', async()=>{
    expect(wrapper.get('[data-test="content"]').text()).toBe('hello') 
    await wrapper.setProps({content:'Good bye'})
    expect(wrapper.get('[data-test="content"]').text()).toBe('Good bye')
  })

  it('props components',()=>{
    // const propsWrapper = mount(Props)
    // const target = propsWrapper.get(PropsComputed)
    // expect(target.props(content)).toEqual('say hi')
  })
})
