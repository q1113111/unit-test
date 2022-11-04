import { mount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import { h } from 'vue'
import Slot from '../Slot.vue'
import SlotFooter from '../SlotFooter.vue'

it('default slot', async () => {
  const wrapper = mount(Slot)
  expect(wrapper.html()).toMatchInlineSnapshot('"<div></div>"')
})

it('default slots', async () => {
  const wrapper = await mount(Slot, {
    slots: {
      default: 'Slot Content'
    }
  })
  expect(wrapper.html()).toContain('Slot Content')
})

it('name slot', () => {
  const wrapper = mount(Slot, {
    slots: {
      header: 'ithelp 2022 鐵人賽',
      body: 'vue3 單元測試',
      footer: 'by Shawn'
    }
  })
  expect(wrapper.html()).toMatchInlineSnapshot('"<div>ithelp 2022 鐵人賽vue3 單元測試by Shawn</div>"')
})

it('scoped slot', () => {
  const wrapper = mount(Slot, {
    slots: {
      staff: `
                 <p>店員：{{ staffInfo['orange-cat']['name'] }}</p>
                 <p>限定項目：{{ staffInfo['black-cat']['signature-dish'] }}</p>
            `
    }
  })

  expect(wrapper.html()).toMatchInlineSnapshot(`
      "<div>
        <p>店員：橘</p>
        <p>限定項目：拿鐵</p>
      </div>"
    `)
})

it('layout', () => {
  const wrapper = mount(Slot, {
    slots: {
      header: h('div', '相同內容'),
      body: { template: '<div>相同內容</div>' },
      footer: SlotFooter
    }
  })
  expect(wrapper.html()).toMatchInlineSnapshot(`
      "<div>
        <div>相同內容</div>
        <div>相同內容</div>
        <footer> 我是footer </footer>
      </div>"
    `)
})
