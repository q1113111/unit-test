import { mount } from "@vue/test-utils";
import { expect, it } from "vitest";
import Directives from '../Directive.vue'

const vFocus = {
    mounted: (el) => el.focus(),
}
it('directives', () => {
    const wrapper = mount(Directives, {
        attachTo: document.body,
        global: {
            directives: {
                Focus: vFocus  // 屬性匹配的名稱規則 Abc 會 match 到 v-abc
            }
        }
    })
    expect(wrapper.find('[data-test="target"]').element).toBe(document.activeElement)
})