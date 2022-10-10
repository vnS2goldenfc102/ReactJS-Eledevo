import { ADD_ITEMS_FAILURE, ADD_ITEMS_REQUEST, ADD_ITEMS_SUCCESS, DELETE_ITEMS_FAILURE, DELETE_ITEMS_REQUEST, DELETE_ITEMS_SUCCESS, GET_ITEMS_FAILURE, GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS, PAGINATION_ITEMS_FAILURE, PAGINATION_ITEMS_REQUEST, PAGINATION_ITEMS_SUCCESS, SEARCH_PAGI_ITEMS_REQUEST, SEARCH_PAGI_ITEMS_SUCCESS, UPDATE_ITEMS_FAILURE, UPDATE_ITEMS_REQUEST, UPDATE_ITEMS_SUCCESS } from "../constants";

const DEFAULT_STATE = {
    listItem: [],
    totalPage: 1,
    activePage: 1,
    textSearch: '',
    isFetching: false,
    dataFetched: false,
    error: false,
    errorMessage: null
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case GET_ITEMS_REQUEST:
        case ADD_ITEMS_REQUEST:
        case UPDATE_ITEMS_REQUEST:
        case DELETE_ITEMS_REQUEST:
        case PAGINATION_ITEMS_REQUEST:
        case SEARCH_PAGI_ITEMS_REQUEST:
            return {
                ...state,
                isFetching: true,
                dataFetched: false,
                error: false,
                errorMessage: null
            }

        case GET_ITEMS_SUCCESS:
            return {
                ...state,
                listItem: action.payload,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null

            }
        case PAGINATION_ITEMS_SUCCESS:
            return {
                ...state,
                listItem: action.payload.resPagi,
                totalPage: action.payload.totalPage,
                activePage: action.payload.activePage,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null

            }
        case SEARCH_PAGI_ITEMS_SUCCESS:
            return {
                ...state,
                listItem: action.payload.resPagi,
                totalPage: action.payload.totalPage,
                activePage: action.payload.activePage,
                textSearch: action.payload.textSearch,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null
            }
        case ADD_ITEMS_SUCCESS:
        case UPDATE_ITEMS_SUCCESS:
        case DELETE_ITEMS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null
            }

        case GET_ITEMS_FAILURE:
        case ADD_ITEMS_FAILURE:
        case UPDATE_ITEMS_FAILURE:
        case DELETE_ITEMS_FAILURE:
        case PAGINATION_ITEMS_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: action.error
            }
        default:
            return {
                DEFAULT_STATE
            }
    }
}