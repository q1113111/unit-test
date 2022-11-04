import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

// vi.useFakeTimers 使用虛擬時間
// vi.setSystemTime 設定系統時間
// vi.useRealTimers 使用真實時間
// vi.getMockedSystemTime   取得模擬時間
// vi.getRealSystemTime 取得真實時間
// vi.restoreCurrentDate 系統恢復真實時間
it('should mock system', () => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date('2022-10-13'))
  // 設定模擬時間
  expect(new Date()).toEqual(new Date('2022-10-13'))

  // 使用真實時間
  vi.useRealTimers()
  expect(new Date()).not.toEqual(new Date('2022-10-13'))

  // 取得真實時間
  expect(vi.getRealSystemTime()).not.toEqual(new Date('2022-10-13'))
})

it('should restore current date', () => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date('2022-10-13'))
  // vi.restoreCurrentDate()

  // expect(new Date()).not.toEqual(new Date('2022-10-13'))
})

const formatDateTime = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}-${month}-${day}`
}

describe('mock system time', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })
  it('should mock system time', () => {
    vi.setSystemTime(new Date('2022-10-13'))
    expect(new Date()).toEqual(new Date())
  })

  it('should restore system time', () => {
    // expect(formatDateTime(new Date())).toEqual(formatDateTime(new Date('2022-11-2')))
  })
})

it('should mock timers', () => {
  vi.useFakeTimers()
  const mockFn = vi.fn()

  setTimeout(mockFn, 1000)
  vi.runAllTimers()

  expect(mockFn).toHaveBeenCalled()
})

it('should run only pending timers', () => {
  vi.useFakeTimers()
  const cache = {
    count: 0
  }
  const mockFn = vi.fn(() => {
    cache.count++
    setTimeout(() => {
      mockFn()
    }, 1000)
  })

  mockFn() // 此時 cache.count===1

  expect(cache.count).toEqual(1)
  vi.runOnlyPendingTimers() // 執行下一個 setTimeout
  expect(cache.count).toEqual(2)
})

it('should advance timers by time', () => {
  vi.useFakeTimers()
  const mockFn = vi.fn()

  setTimeout(mockFn, 1000)
  vi.advanceTimersByTime(999) // 計時器被提前 999 毫秒執行
  expect(mockFn).not.toHaveBeenCalled()
  vi.advanceTimersByTime(1) // 計時器被提前 1000 毫秒執行
  expect(mockFn).toHaveBeenCalled()
})

it('should advance timers to next timer', () => {
  vi.useFakeTimers()
  const mockFn = vi.fn()

  setTimeout(mockFn, 1000)
  setTimeout(mockFn, 3000)

  vi.advanceTimersToNextTimer() // 所有計時器提前了 1000 毫秒
  expect(mockFn).toHaveBeenCalled()
  vi.advanceTimersToNextTimer() // 所有計時器被提前了 3000 毫秒
  expect(mockFn).toHaveBeenCalled()
})

it('should restore all mocks', () => {
  vi.useFakeTimers()
  const mockFn = vi.fn()

  setTimeout(mockFn, 1000)
  // 如果想要將從模擬計時器恢復成真實計時器的時候
  vi.restoreAllMocks()

  expect(mockFn).not.toHaveBeenCalled()
})
