import { put, takeEvery, select } from "@redux-saga/core/effects"
import * as type from '../constants'
import * as CallApi from "../fetchAPIs/CallApis"
import * as actions from "../actions/ItemPageAction"
function* handleGet() {
    try {
        const res = yield CallApi.getItem()
        yield put(actions.getItemSuccess(res.myData))
    } catch (error) {
        yield put(actions.getItemFailure(error))
    }
}

// add
function* handleAdd(data) {
    try {
        yield CallApi.addItem(data.payload)
        yield put(actions.addItemSuccess())
        const store = yield select((state) => state.items)
        if (store.textSearch) {
            const resSearch = yield CallApi.searchPagiItem(store)
            if (data.payload.name.includes(store.textSearch)) {
                const payload = {
                    activePage: resSearch.totalPage,
                    textSearch: store.textSearch
                }
                yield put(actions.searchItemRequest(payload))
            } else {
                const payload = {
                    activePage: 1,
                    totalPage: 1,
                    resPagi: [data.payload],
                    textSearch: store.textSearch
                }
                yield put(actions.searchItemSuccess(payload))
            }
        }
        else {
            const res = yield CallApi.paginationItem()
            yield put(actions.pagiItemRequest(res.totalPage))
        }
    } catch (error) {
        yield put(actions.addItemFailure(error))
    }
}

function* handleUpdate(data) {
    try {
        yield CallApi.updateItem(data.payload)
        yield put(actions.updateItemSuccess())
        const store = yield select((state) => state.items)
        if (store.textSearch) {
            if (data.payload.name.includes(store.textSearch)) {
                const payload = {
                    activePage: store.activePage,
                    textSearch: store.textSearch
                }
                yield put(actions.searchItemRequest(payload))
            } else {
                const payload = {
                    activePage: 1,
                    totalPage: 1,
                    resPagi: [data.payload],
                    textSearch: store.textSearch
                }
                yield put(actions.searchItemSuccess(payload))
            }
        }
        else {
            yield put(actions.pagiItemRequest(store.activePage))
        }
    } catch (error) {
        yield put(actions.updateItemFailure(error))
    }
}

function* handleDelete(data) {
    try {
        yield CallApi.deleteItem(data.payload)
        yield put(actions.deleteItemSuccess())
        const store = yield select((state) => state.items)
        if (store.textSearch) {
            if (store.listItem.length <= 1 && store.activePage === 1) {
                yield put(actions.searchItemSuccess({ activePage: 1, totalPage: 1, textSearch: store.textSearch }))
            } else if (store.listItem.length <= 1) {
                yield put(actions.searchItemRequest({ textSearch: store.textSearch, activePage: store.activePage - 1 }))
            }
            else {
                yield put(actions.searchItemRequest({ textSearch: store.textSearch, activePage: store.activePage }))
            }
        }
        else {
            if (store.listItem.length <= 1 && store.activePage === 1) {
                yield put(actions.pagiItemSuccess({ activePage: 1, totalPage: 1 }))
            } else if (store.listItem.length <= 1) {
                yield put(actions.pagiItemRequest(store.activePage - 1))  
            } 
            
            else {
                yield put(actions.pagiItemRequest(store.activePage))
            }
        } 

    } catch (error) {
        yield put(actions.deleteItemFailure(error))
    }
}

// pagination
function* handlePagi(data) {
    try {

        const resPagi = yield CallApi.paginationItem(data.payload)
        const payload = {
            totalPage: resPagi.totalPage,
            resPagi: resPagi.listPagination,
            activePage: data.payload
        }
        yield put(actions.pagiItemSuccess(payload))
        if (resPagi.listPagination.length < 1 && data.payload === 1) {
            yield put(actions.pagiItemSuccess({ activePage: 1, totalPage: 1 }))
        }
    } catch (error) {
        yield put(actions.pagiItemFailure(error))
    }
}

function* handleSearchPagi(data) {
    try {

        const resPagi = yield CallApi.searchPagiItem(data.payload)

        const payload = {
            totalPage: resPagi.totalPage,
            resPagi: resPagi.listSearchPagi,
            textSearch: data.payload.textSearch,
            activePage: data.payload.activePage
        }
        yield put(actions.searchItemSuccess(payload))
        if (resPagi.listSearchPagi.length < 1 && data.payload.activePage === 1) {
            yield put(actions.searchItemSuccess({ activePage: 1, totalPage: 1 }))
        }
    } catch (error) {
        yield put(actions.searchItemFailure(error))
    }
}

export const itemSagas = [
    takeEvery(type.GET_ITEMS_REQUEST, handleGet),
    takeEvery(type.ADD_ITEMS_REQUEST, handleAdd),
    takeEvery(type.UPDATE_ITEMS_REQUEST, handleUpdate),
    takeEvery(type.DELETE_ITEMS_REQUEST, handleDelete),
    takeEvery(type.PAGINATION_ITEMS_REQUEST, handlePagi),
    takeEvery(type.SEARCH_PAGI_ITEMS_REQUEST, handleSearchPagi),
]

