import { expect, it } from 'vitest'

it('toBe introduce', () => {
  // toBe：
  // 對資料類型為純值（Primitive Value）來說就是比對值相等
  expect(1).toBe(1)

  // toBeCloseTo：處理浮點數運算時
  //   expect(0.1 + 0.2).toBe(0.3) // failed 符點溢出，結果應該會為 0.30000000000000004
  expect(0.1 + 0.2).toBeCloseTo(0.3) // passed
  expect(5).toBeGreaterThan(1)
  expect(5).toBeGreaterThanOrEqual(5)
  expect(6).toBeLessThan(7)
  expect(6).toBeLessThanOrEqual(6)

  const a = ''
  let b
  expect(a).toBeDefined() // passed
  expect(b).toBeUndefined() // passed

  expect(1).toBeTruthy() // passed
  expect(0).toBeFalsy() // passed

  expect(null).toBeNull() // passed

  expect('0912345678').toMatch(/^09[0-9]{8}$/) // passed
})

it('toArray introduce', () => {
  // toContain：陣列是否含有目標值
  expect(['1', '2']).toContain('2')

  // toContainEqual： 陣列是否含有該值（類型為純值時檢驗是否相等，類型為物件時檢驗結構是否全等）
  expect([{ val: '1' }, { val: '2' }]).toContainEqual({ val: '1' })
  // failed
  // expect([{ val: '1', something: 'other' }]).toContainEqual({ val: '1' })

  expect('12').toHaveLength(2) // passed
  expect([1, 2]).toHaveLength(2) // passed
  expect({ length: 2 }).toHaveLength(2) // passed
})

it('Object check', () => {
  // toEqual：比對物件結構是否相同，而非比對參照來源（reference），而結構中若值為 undefined 會忽略
  const a = { num: 100 }
  const b = { num: 100, secret: undefined }
  expect(a).toEqual(b)

  // toStrictEqual：與 toEqual 類似，但 undefined 不會被忽略。
  const B = { num: 100 }
  const C = { num: 100, secret: undefined }
  // expect(A).toStrictEqual(C) // failed

  // 甚至 Class 所創造的物件與物件實字（Object Literals）相比也視為不同。
  class MockClass {
    constructor (num) {
      this.num = num
    }
  }
  expect({ num: 1 }).toStrictEqual({ num: 1 }) // passed
  // expect(new MockClass(1)).toStrictEqual({ num: 1 }) // failed

  // toHaveProperty：檢查物件含有屬性與其屬性值
  const obj = { num: 100 }

  expect(obj).toHaveProperty('num') // passed
  expect(obj).toHaveProperty('num', 100) // passed
  // expect(obj).toHaveProperty('num', 200) // failed

  // toMatchObject： 檢查物件的子層
  const obj2 = { nested: { num: 200 }, num: 100 }
  expect(obj2).toMatchObject({ num: 100 }) // passed
  // expect(obj).toMatchObject({ num: 200 }) // failed
  // expect(obj).toMatchObject({ nested: { num: 100 } }) // failed
  expect(obj2).toMatchObject({ nested: { num: 200 } }) // passed
})
