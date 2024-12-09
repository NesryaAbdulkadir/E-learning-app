import React from "react";
import { courses } from "../../contens";
import { useParams } from "react-router-dom";
import { slugify } from "../../helper/slugify";

export default function LessonEnd() {
  const { slug } = useParams();
  const course = courses.find((course) => slugify(course.title) === slug);

  console.log(course);
  return (
    <div className="p-52 flex flex-col items-center justify-center gap-3">
      <h1 className="text-7xl font-bold text-center">Congratulations!</h1>
      <p className="text-center text-xl">
        You have completed the course{" "}
        <a href={`/courses/${slugify(course?.title)}/lessons`}>
          <b>{course.title}</b>
        </a>
      </p>
      <p className="text-center">
        You can now go to the next course or go back to the{" "}
        <a href="/" className="text-blue-500">
          Home Page
        </a>
      </p>
    </div>
  );
}
