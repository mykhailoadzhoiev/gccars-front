import { applyMiddleware, combineReducers, createStore } from 'redux'
import { carReducer } from '../reducers/carReducer'
import { userReducer } from '../reducers/userReduser'


const allReducers = combineReducers({
    user: userReducer,
    car: carReducer
})

export const store = createStore(allReducers)