import { mount } from "@vue/test-utils";
import { expect, it } from "vitest";
import Snapshot from '../Snapshot.vue'

// 若有需要預防未預期變更的靜態檔案如「JSON 檔」、「UI 元件」⋯⋯等，都可以透過快照來處理
it('cat snapshot', () => {
    const target = [
        {
            name: 'Orange',
            age: 4
        },
        {
            name: 'Blank',
            age: 6
        }
    ]
    expect(target).toMatchSnapshot()
    //直接產生
     // 原先 toMatchInlineSnapshot 內沒有任何東西
    // 在執行測試後就會將快照內容自動生成在 toMatchInlineSnapshot 裡
    expect(target).toMatchInlineSnapshot(`
      [
        {
          "age": 4,
          "name": "Orange",
        },
        {
          "age": 6,
          "name": "Blank",
        },
      ]
    `)
})

it('snapshot', () => {
    const wrapper = mount(Snapshot)
    const target = wrapper.find('[data-test="link"]')
    // expect(target).toMatchSnapshot()
    expect(target).toMatchInlineSnapshot(`
      DOMWrapper {
        "isDisabled": [Function],
        "wrapperElement": <a
          data-test="link"
          href="http://ithelp.ithome.com.tw"
        >
           Issthelaap 
        </a>,
      }
    `)
})
// 可以引入 JSON 檔案來做快照
// import Area from './area.json'
// it('static json snapshot', () => {
//     expect(Area).toMatchSnapshot()
// })