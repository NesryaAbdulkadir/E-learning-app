import React from "react";
import { Link } from "react-router-dom";
import { slugify } from "../../helper/slugify";

export default function Courses({ title, courses, categories }) {
  return (
    <div
      className="md:py-24 grid-cols-2
     mx-10 md:ml-96 "
    >
      <div className="flex flex-col gap-10">
        <h1 className="lg:text-7xl sm:text-6xl text-5xl text-center font-bold">
          {title}
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {courses.map((course, index) => (
            <Link
              to={`/courses/${slugify(course.title)}`}
              className="shadow-md rounded-lg p-10 bg-white flex flex-col gap-3 hover:scale-95 transition-all duration-300"
              key={index}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full rounded-md"
              />

              <h1 className="text-4xl font-bold">{course.title}</h1>
              <p className="text-xl">{course.description}</p>

              <p
                className={`py-2 px-4 rounded-full max-w-max text-gray-800 text-sm
                  ${categories.map((catagory) =>
                    catagory.name === course.category
                      ? `
                    ${catagory.code}
                    `
                      : "bg-gray-300"
                  )})}
                  `}
              >
                {course.category}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
