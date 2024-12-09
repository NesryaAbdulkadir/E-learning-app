import React, { useState } from "react";

export default function Curriculum({ course }) {
  const [showDetails, setShowDetails] = useState(null);

  return (
    <div className="w-full mt-20 md:p-10 p-5">
      <p className="text-5xl font-bold text-center mb-4">Curriculum</p>

      <div className="flex flex-col gap-3 w-full">
        {course?.curriculum.map((curriculum, index) => (
          <div
            key={index}
            className="rounded-md p-3 bg-white flex flex-col gap-2"
            onClick={() => {
              showDetails !== null
                ? setShowDetails(null)
                : setShowDetails(index);
            }}
          >
            <h1 className="text-2xl font-bold ">
              Lesson {index + 1}: {curriculum?.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
