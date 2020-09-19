import { createStore, applyMiddleware } from 'redux'
import { rootReducers } from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

const middleware = process.env.NODE_ENV !== 'production' ?
    [require('redux-immutable-state-invariant').default(), thunk] :
    [thunk];

export const configureStore = () => {
    return createStore(rootReducers, composeWithDevTools(applyMiddleware(...middleware)))

}