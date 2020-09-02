import {takeEvery,put,call} from "redux-saga/effects"
import {NEW_SEARCH ,SEARCH_QUERY} from "../Redux/Constant/index"
import axios from "axios"

export default function* watcherFunction(){
    yield takeEvery(SEARCH_QUERY ,workerFunction )
}

function* workerFunction(action){
        try{
            const result = yield call(searchAPI , action.payload)
            console.log(result)
            yield put ({type : NEW_SEARCH , payload : result.data.hits})
        }
        catch(e){
            yield put ({type:"ERROR" , payload:e})
        }
}

function searchAPI(query){
    return axios.get(`https://pixabay.com/api/?key=12413278-79b713c7e196c7a3defb5330e&q=${query}`)
}
