import React, { useEffect, useState } from "react";
import { Course, Store } from "../../types/CourseTypes";
import { connect } from "react-redux";
import { createCourse } from "../../redux/actions/courseActions";
import "font-awesome/css/font-awesome.min.css";

type coursePropType = {
  courses: any;
  createCourse: (course: Course) => void;
};

const CoursesPage = (props: coursePropType) => {
  const [course, setCourse] = useState<Course>({ title: "" });

  const handleCourseSet = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCourse({ ...course, title: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setCourse({ ...course, title: null });

    props.createCourse(course);
  };

  return (
    <form className="content-container" onSubmit={(e: any) => handleSubmit(e)}>
      <h1>Courses</h1>
      <h3>Add Course</h3>
      <div className="content-input-container">
        <input
          type="text"
          value={course?.title || ""}
          onChange={(e) => handleCourseSet(e)}
        />
        <div className="input-container-items">
          {console.log(props.courses)}
          {props.courses.courses.map((course: Course) => {
            if (course?.title !== null)
              return (
                <div className="input-container-items__item" key={course.title}>
                  <div className="input-container-items__item-headline">
                    {course.title}
                  </div>
                  <div className="rating">
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                  </div>
                </div>
              );
          })}
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state: Store) => {
  return {
    courses: state.courses,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    createCourse: (course: Course) => dispatch(createCourse(course)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
