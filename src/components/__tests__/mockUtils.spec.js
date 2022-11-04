import { expect, it, vi } from "vitest";
import utils from "../../utils";

vi.mock('../../utils',()=>{
    return{
      // 預設匯出(default export)要使用 default 作為屬性名稱
      default:{
        debounce:vi.fn(),
        throttle:vi.fn()
      }
    }
})

it('should mock',()=>{
    utils.debounce()
    expect(utils.debounce).toHaveBeenCalled()
})