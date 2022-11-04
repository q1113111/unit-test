import { expect, it, vi } from 'vitest'

it('should get mock.calls', () => {
    const mockFn = vi.fn()

    mockFn(1, 2, 3) // first call
    mockFn(4, 5, 6) // second call

    expect(mockFn.mock.calls).toEqual([
        [1, 2, 3], // first call
        [4, 5, 6] // second call
    ])

    expect(mockFn.mock.lastCall).toEqual(
        [4, 5, 6] // last call
    )

    // 以陣列紀錄函式被呼叫時的回傳值，其中每個物件都有兩個屬性：
    expect(mockFn.mock.results).toEqual(
        [
            { type: 'return', value: undefined },
            { type: 'return', value: undefined }
        ]
    )
})

it('should get mock.instances', () => {
    const mockFn = vi.fn()

    const obj1 = { name: 'obj1' }
    const obj2 = { name: 'obj2' }

    mockFn.call(obj1, 1, 2, 3)
    mockFn.call(obj2, 4, 5, 6)

    // 以陣列紀錄函式被呼叫時的參照來源（reference）：
    expect(mockFn.mock.instances).toEqual([
        obj1,
        obj2
    ])

})

it('should clear mock', () => {
    const mockFn = vi.fn()

    mockFn(1, 2, 3)
    mockFn(4, 5, 6)

    // 清除 mock.calls、mock.results 屬性中原先的內容並回傳空陣列：
    mockFn.mockClear()
    // 除了做了與 mockClear 一樣的事情之外，還會將實作替換成一個空的函式並且固定回傳 undefined：
    mockFn.mockReset()
    expect(mockFn.mock.calls).toEqual([])
    expect(mockFn.mock.results).toEqual([])
    expect(mockFn()).toBeUndefined()
})

it('should restore mock.calls & mock.results', () => {
    const mockFn = vi.fn(() => 'mock')

    mockFn(1, 2, 3) // first call
    mockFn(4, 5, 6) // second call

    // 除了做了與 mockReset 一樣的事情之外，還會將實作替換成原本的實作：
    mockFn.mockRestore()

    expect(mockFn.mock.calls).toEqual([])
    expect(mockFn.mock.results).toEqual([])
    expect(mockFn()).not.toBeUndefined()
    expect(mockFn()).toBe('mock')
})

it('should mockImplementation', () => {
    // mockImplementation 會將函式、方法的實作替換成傳入的函式：
    const mockFn = vi.fn(() => 'original')
    mockFn.mockImplementation(() => 'mock')

    expect(mockFn()).toBe('mock')

})

it('should mockImplementationOnce', () => {
    const mockFn = vi.fn()
    mockFn.mockImplementationOnce(() => 'mock')
    expect(mockFn()).toBe('mock')
    expect(mockFn()).not.toBe('mock')
})

it('should mockReturnValue', () => {
    const mockFn = vi.fn()
    // 若想要將將函式、方法的回傳值替換成傳入的值，可以使用 mockReturnValue 替換：
    it('should mockReturnValue', () => {
        // mockReturnValueOnce  只替換一次的話
        mockFn.mockReturnValue('mock')
        expect(mockFn()).toBe('mock')
    })
})

// Mock Promise Value
// mockResolvedValue
// mockResolvedValueOnce
// mockRejectedValue
// mockRejectedValueOnce
it('should mockResolvedValue', async () => {
    const mockFn = vi.fn(() => 'original')
    // 而若是要仿造 Promise.reject 的回傳值，則是替換為 mockRejectedValue 與 mockRejectedValueOnce 即可。
    mockFn.mockResolvedValue('mock')
    expect(await mockFn()).toBe('mock')
})


it('should stubGlobal',()=>{

    // 若要模擬全域變數，可以使用 vi.stubGlobal 這個 API，它接受兩個參數：

    // name：全域變數的名稱
    // value：全域變數實際的內容
    const mockWind = {
        location:{
            href:'https://example.com'
        }
    }
    vi.stubGlobal('window', mockWind)
    expect(window.location.href).toBe('https://example.com')
})

// it('should stubGlobal',()=>{
//     const mockLocalStorage ={
//         getItem:vi.fn(),
//         setItem:vi.fn()
//     }
//     vi.stubGlobal('localStorage',mockLocalStorage)
//     localStorage.setItem('key','value')
//     expect(localStorage.getItem).toHaveBeenCalledWith('key')
// })