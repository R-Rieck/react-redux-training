import { Course } from "../../types/CourseTypes";
import { CourseActionTypes, CREATE_COURSE } from "../../types/ReduxTypes";

export const createCourse = (course: Course): CourseActionTypes => {
    return {
        type: CREATE_COURSE,
        course
    }
}