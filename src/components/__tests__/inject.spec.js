import { mount } from "@vue/test-utils";
import { expect, it } from "vitest";
import Inject from '../Inject.vue'

it('should be render correct content after providing count',()=>{
    const wrapper = mount(Inject,{
        global:{
            provide:{
                count:1
            }
        }
    })
    expect(wrapper.find('[data-test="target"]').text()).toBe('1')
})