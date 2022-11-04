import { expect, it, vi } from 'vitest'

it('should spying a function', () => {
  const cache = {
    count: 0
  }

  const utils = {
    add () {
      cache.count++
    }
  }

  const spy = vi.spyOn(utils, 'add') // 測試替身綁定在 utils.add身上
  utils.add() // 呼叫utils.add
  // 透過spyOn 取得該方法的相關紀錄
  expect(spy).toHaveBeenCalled()
  expect(spy).toBeCalledTimes(1)
  expect(cache.count).toEqual(1)
})
