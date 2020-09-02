import { NEW_SEARCH } from "../Constant/index"

const initialState = {
    searchResult: []
}

function rootReducer(state = initialState, action){
    if(action.type === NEW_SEARCH){
        let resultState = {...state , searchResult: action.payload }
        return resultState
    }
    return state
}

export default rootReducer