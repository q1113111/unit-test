import { describe, it, expect, vi } from 'vitest'

const sayHi = (something) =>something
const spyOnSayHi = vi.fn(sayHi)

// toHaveBeenCalled：斷言函式有被呼叫過
spyOnSayHi()
expect(spyOnSayHi).toHaveBeenCalled()


// oHaveBeenCalledTimes：斷言函式被呼叫過幾次
spyOnSayHi()
spyOnSayHi()
spyOnSayHi()
expect(spyOnSayHi).toBeCalledTimes(3)

// toHaveBeenCalledWith：斷言函式被呼叫時所帶的參數
spyOnSayHi('Hello, Unit-Test!')
expect(spyOnSayHi).toHaveBeenCalledWith('hello, Unit-Test')

// toHaveReturnedTimes：斷言函式經過操作後應該要返回值幾次
// toHaveLastReturnedWith：斷言函式經過操作後最後應該要返回的值
// toHaveNthReturnedWith：斷言函式經過操作後第 N 次應該要返回的值

spyOnSayHi('Nice to meet you!')
spyOnSayHi('See you again!')
expect(spyOnSayHi).toHaveReturnedTimes(2)
expect(spyOnSayHi).toHaveLastReturnedWith('See you again!')
expect(spyOnSayHi).toHaveReturnedWith(1,'Nice to meet you')


// toHaveReturned：斷言函式呼叫後應該至少要返回值一次
const sayHi2 = (something) => something + 'Hello, Spy!'
const spyOnSayHi2 =vi.fn((val)=>sayHi2(val)) 
spyOnSayHi2('Hello, Unit-Test!')
expect(spyOnSayHi).toHaveReturned()

// oHaveReturnedWith：斷言函式呼叫後返回的值
spyOnSayHi2('Hello, Unit-Test!')
expect(spyOnSayHi).toHaveReturnedWith('Hello, Unit - Test! Hello, Spy!')