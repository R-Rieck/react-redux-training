import { Course } from "./CourseTypes";

export const CREATE_COURSE = "CREATE_COURSE"
export const DELETE_COURSE = "DELETE_COURSE"

export interface CreateCourse {
    type: typeof CREATE_COURSE,
    course: Course
}

export interface DeleteCourse {
    type: typeof DELETE_COURSE,
    course: Course
}

export type CourseActionTypes = CreateCourse | DeleteCourse