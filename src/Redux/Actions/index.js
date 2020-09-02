import {SEARCH_QUERY} from "../Constant/index"

export function search (data){
    return {type: SEARCH_QUERY , payload: data}
}