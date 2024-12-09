import React, { useEffect } from "react";
import { courses } from "../../contens";
import { useNavigate, useParams } from "react-router-dom";
import { slugify } from "../../helper/slugify";
import ProgressBar from "../../Components/ProgressBar";
import { useLessonContext } from "../../context";

export default function Lessons() {
  const { progress, updateProgress, calculateTotalLessons } =
    useLessonContext();
  const { slug } = useParams();
  const navigate = useNavigate();
  const course = courses.find((course) => slugify(course.title) === slug);

  return (
    <div className="p-24 flex flex-col gap-5 ">
      <h1 className="text-6xl font-bold p-5">{course?.title}</h1>
      <p className="text-xl">{course?.description}</p>
      <ProgressBar progress={progress[course.title]} />

      <h1 className="text-4xl font-bold">Lessons</h1>
      <ul className="flex flex-col gap-5 ">
        {course?.curriculum.map((lesson, index) => (
          <li key={index}>
            <a
              href={`/courses/${slugify(course?.title)}/lessons/${slugify(
                lesson?.title
              )}`}
              className="shadow-md text-xl rounded-lg p-4 bg-white flex flex-col gap-3"
            >
              <p className="font-bold">{lesson?.title}</p>
              {lesson?.topics?.map((topic, index) => (
                <p key={index} className="text-sm ml-3 list-disc">
                  {topic.title}
                </p>
              ))}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
