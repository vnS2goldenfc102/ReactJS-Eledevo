import * as type from "../constants"

function getItemRequest() {
    return {
        type: type.GET_ITEMS_REQUEST
    }
}

function getItemSuccess(payload) {
    return {
        type: type.GET_ITEMS_SUCCESS,
        payload
    }
}

function getItemFailure(payload) {
    return {
        type: type.GET_ITEMS_FAILURE,
        payload
    }
}

// add

function addItemRequest(payload) {
    return {
        type: type.ADD_ITEMS_REQUEST,
        payload
    }
}

function addItemSuccess(payload) {
    return {
        type: type.ADD_ITEMS_SUCCESS,
        payload
    }
}

function addItemFailure(payload) {
    return {
        type: type.ADD_ITEMS_FAILURE,
        payload
    }
}

// update
function updateItemRequest(payload) {
    return {
        type: type.UPDATE_ITEMS_REQUEST,
        payload
    }
}

function updateItemSuccess(payload) {
    return {
        type: type.UPDATE_ITEMS_SUCCESS,
        payload
    }
}

function updateItemFailure(payload) {
    return {
        type: type.UPDATE_ITEMS_FAILURE,
        payload
    }
}

// delete
function deleteItemRequest(payload) {
    return {
        type: type.DELETE_ITEMS_REQUEST,
        payload
    }
}

function deleteItemSuccess(payload) {
    return {
        type: type.DELETE_ITEMS_SUCCESS,
        payload
    }
}

function deleteItemFailure(payload) {
    return {
        type: type.DELETE_ITEMS_FAILURE,
        payload
    }
}
//
function pagiItemRequest(payload) {
    return {
        type: type.PAGINATION_ITEMS_REQUEST,
        payload
    }
}

function pagiItemSuccess(payload) {
    return {
        type: type.PAGINATION_ITEMS_SUCCESS,
        payload
    }
}

function pagiItemFailure(payload) {
    return {
        type: type.PAGINATION_ITEMS_FAILURE,
        payload
    }
}

function searchItemRequest(payload) {
    return {
        type: type.SEARCH_PAGI_ITEMS_REQUEST,
        payload
    }
}

function searchItemSuccess(payload) {
    return {
        type: type.SEARCH_PAGI_ITEMS_SUCCESS,
        payload
    }
}

function searchItemFailure(payload) {
    return {
        type: type.SEARCH_PAGI_ITEMS_FAILURE,
        payload
    }
}

export { getItemRequest, getItemSuccess, getItemFailure,
        addItemRequest, addItemSuccess, addItemFailure,
        updateItemRequest, updateItemSuccess, updateItemFailure,
        deleteItemRequest, deleteItemSuccess, deleteItemFailure,
        pagiItemRequest, pagiItemSuccess, pagiItemFailure,
        searchItemRequest, searchItemSuccess, searchItemFailure,}