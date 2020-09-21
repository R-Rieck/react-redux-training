import { courses } from '../../mockApi/mockData'
import { Course } from '../types/CourseTypes'
import { handleResponse, handleerror } from './apiUtils'
const baseUrl = process.env.API_URL + "/courses/"

export const getCourses = () => {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleerror)
}

export const saveCourse = (course: Course) => {
    return fetch(baseUrl + (course.id || ""), {
        method: course.id ? "PUT" : "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(course)
    })
        .then(handleResponse)
        .catch(handleerror)
}

export const deleteCourse = (id: string) => {
    return fetch(baseUrl + (id), { method: "DELETE" })
        .then(handleResponse)
        .catch(handleerror)
}
