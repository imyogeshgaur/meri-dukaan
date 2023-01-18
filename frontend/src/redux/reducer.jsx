import { FETCH_SUCCESS_STATE, FETCH_FAILURE_STATE } from "./actionType";


const initalState = {
    data: [],
    error: ""
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCH_SUCCESS_STATE: return {
            ...state,
            data: action.payload
        }

        case FETCH_FAILURE_STATE: return {
            ...state,
            error: action.payload
        }

        default: return state
    }
}

export default reducer;