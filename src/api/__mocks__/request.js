import axios from "axios";

export const getList = () => new Promise(resolve => {
    resolve({
        data: { name: '李四' }
    });
})

export const getList2 = () => new Promise(resolve => {
    resolve({
        data: { name: '456四' }
    });
})


export const getApi = () => new Promise(resolve => {
    resolve({
        data: { name: '456四api' }
    });
})