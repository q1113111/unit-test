import { mount } from "@vue/test-utils";
import { expect, it } from "vitest";
import RenderStubDefaultSlot from '../Stub.vue'

it('renderStubDefaultSlot 使用場景比較特別，他主要是用來指定是否強迫渲染 slot 內容，即使是在 shallow 元件的時候',()=>{
    const wrapper = mount(RenderStubDefaultSlot,{
        shallow:true,
        slots:{
            default:'<p>force render this!</p>'
        },
        global:{
            renderStubDefaultSlot:true
        }
    })
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<div>
        <p>force render this!</p>
        <child-component-stub></child-component-stub>
      </div>"
    `)
})

it('use stubs base',()=>{
    const wrapper = mount(RenderStubDefaultSlot,{
        global:{
            stubs:{ChildComponent:true}
        }
    })
    expect(wrapper.html()).toEqual(`<div>
  <child-component-stub></child-component-stub>
</div>`)
})

it('should be render...', () => {
    const wrapper = mount(RenderStubDefaultSlot, {
        global: {
            stubs: {
                ChildComponent:
                {
                    name: 'StubComponent',
                    template: '<p>custom content</p>'
                }
            },
        }
    })
    expect(wrapper.html()).toEqual(`<div>
  <p>custom content</p>
</div>`)
})