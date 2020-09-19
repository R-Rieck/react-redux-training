import { CourseActionTypes, CREATE_COURSE } from "../../types/ReduxTypes";
import { Store } from '../../types/CourseTypes'

const initalState: Store = {
    courses: []
}

export const courseReducer = (state = initalState, action: CourseActionTypes): Store => {
    switch (action.type) {
        case CREATE_COURSE:
            return { courses: [...state.courses, { ...action.course }] }
        default:
            return state;
    }
}