import { createStore } from 'redux'
import sampleReducer from './Reducers/sampleReducer'

export const initialState = {
    nice: true,
    notNice: false
}

export const Store = createStore(
    sampleReducer,
    initialState,
    // development purpose! This lets us inspect the redux state in the redux devtools browser extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)