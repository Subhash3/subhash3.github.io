import { createStore } from 'redux'
import sampleReducer from './Reducers/sampleReducer'

export const initialState = {
    nice: true,
    notNice: false
}

export let Store

if (process.env.NODE_ENV === 'production') {
    Store = createStore(
        sampleReducer,
        initialState
    )
} else {
    Store = createStore(
        sampleReducer,
        initialState,
        // development purpose! This lets us inspect the redux state in the redux devtools browser extension
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}