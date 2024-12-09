import React from "react";
import { useParams } from "react-router-dom";
import { categories, courses } from "../../contens";
import { deslugify, slugify, toTitleCase } from "../../helper/slugify";
import Course from "../Course";
import Courses from "../../Components/Courses";
import SideBar from "../../Components/SideBar";

export default function CourseByCategory() {
  const { category } = useParams();
  const categoryCourses = courses.filter(
    (course) => slugify(course.category) === category
  );

  return (
    <div className="w-fulls">
      <SideBar />

      <Courses
        courses={categoryCourses}
        categories={categories}
        title={`${toTitleCase(deslugify(category))} Courses`}
      />
    </div>
  );
}
