import { courseReducer } from './courseReducer'
import { combineReducers } from 'redux'

export const rootReducers = combineReducers({
    courses: courseReducer
})

export default rootReducers