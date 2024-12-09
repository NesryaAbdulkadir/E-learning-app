import React from "react";
import { categories, courses } from "../../contens";
import { useNavigate, useParams } from "react-router-dom";
import { slugify } from "../../helper/slugify";
import Curriculum from "../../Components/Curriculum";

export default function Course() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const course = courses.find((course) => slugify(course.title) === slug);
  const handleStartLearning = () => {
    navigate(`/courses/${slugify(course?.title)}/lessons`);
  };

  return (
    <div className="pt-28 w-8/12 mx-auto">
      <div className="grid lg:grid-cols-3 grid-cols-1  gap-10 items-center mb-10">
        <img
          src={course?.image}
          alt={course?.title}
          className="col-span-1 w-full rounded-md"
        />
        <div className="flex flex-col gap-3 col-span-2">
          <a
            href={`/courses/category/${slugify(course?.category)}`}
            className={`py-2 px-4 rounded-full max-w-max text-gray-800 text-sm
    ${categories.map((catagory) =>
      catagory.name === course?.category
        ? `
      ${catagory.code}
      `
        : "bg-gray-300"
    )})}
    `}
          >
            {course?.category}
          </a>
          <h1 className="md:text-6xl sm:text-5xl text-4xl leading-tight font-bold">
            {course?.title}
          </h1>
          <p className="text-xl">{course?.description}</p>
        </div>
      </div>
      <div className="flex flex-col gap-10 w-full items-center">
        <button
          onClick={handleStartLearning}
          className="bg-cyan-600 hover:bg-cyan-700 rounded-sm  text-white px-6 py-3 text-xl"
        >
          Start Learning
        </button>
      </div>
      <Curriculum course={course} />
    </div>
  );
}
