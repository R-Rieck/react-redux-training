import React, { useState } from "react";
import { Course } from "../../types/Course";

export const CoursesPage = () => {
  const [course, setCourse] = useState<Course>({ title: "some title" });

  return (
    <form>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input type="text" value={course.title} />
      <input type="submit" value="Save" />
    </form>
  );
};
