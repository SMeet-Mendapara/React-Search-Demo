import {createStore,applyMiddleware} from "redux"
import rootReducer from "../Reducer/index"
import Reactsagas from "redux-saga"
import ApiCall from "../../Saga/Apisaga"

const initializeSagas = Reactsagas()

const store = createStore(rootReducer,applyMiddleware(initializeSagas))

initializeSagas.run(ApiCall)

export default store
