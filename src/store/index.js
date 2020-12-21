import { action, observable } from "mobx"

export let partList = observable({
    config: {},
    data: [],
    headers: {},
    request: {},
    status: 0
})

export const setPartList = action(data => {
    partList.config = data.config
    partList.data = data.data
    partList.headers = data.headers
    partList.request = data.request
    partList.status = data.status
})

export let merchantList = observable({
    config: {},
    data: [],
    headers: {},
    request: {},
    status: 0
}) 

export const setMerchantList = action(data => {
    merchantList.config = data.config
    merchantList.data = data.data
    merchantList.headers = data.headers
    merchantList.request = data.request
    merchantList.status = data.status
})

export const storeList = observable({
    config: {},
    data: [],
    headers: {},
    request: {},
    status: 0
})

export const setStoreList = action(data => {
    storeList.config = data.config
    storeList.data = data.data
    storeList.headers = data.headers
    storeList.request = data.request
    storeList.status = data.status
})