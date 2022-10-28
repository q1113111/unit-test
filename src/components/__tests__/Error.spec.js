import { expect, it } from "vitest";

// toThrowError
// toThrowErrorMatchingSnapshot
// toThrowErrorMatchingInlineSnapshot
it('',()=>{
    const food =(name)=>{
        if(name==='小黃瓜'){
            throw new Error('我不吃小黃瓜')
        }
    }
    // expect(food('小黃瓜')).toThrowError('我不吃小黃瓜')// 若這樣寫的話裡頭的 Error 會導致測試案例失敗
    expect(() => food('小黃瓜')).toThrowError('我不吃小黃瓜')// 需要透過這種方式才能正確斷言
})