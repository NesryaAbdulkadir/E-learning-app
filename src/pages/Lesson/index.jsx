// import React, { useEffect, useState } from "react";
// import { courses } from "../../contens";
// import { slugify } from "../../helper/slugify";
// import { useNavigate, useParams } from "react-router-dom";
// import ProgressBar from "../../Components/ProgressBar";
// import Video from "../../Components/Video";
// import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
// import { useLessonContext } from "../../context";

// export default function Lesson() {
//   const { lessonTitle, slug } = useParams();
//   const {
//     updateProgress,
//     updateCompletedLessons,
//     progress,
//     calculateTotalLessons,
//   } = useLessonContext();
//   const navigate = useNavigate();
//   // Find the course
//   const course = courses.find((course) =>
//     course.curriculum.some(
//       (curriculumItem) => slugify(curriculumItem.title) === lessonTitle
//     )
//   );

//   useEffect(() => {
//     if (course) {
//       calculateTotalLessons(currentLesson.title, currentLesson.topics);
//     }
//   }, [course]);

//   const currentLesson = course?.curriculum.find(
//     (curriculumItem) => slugify(curriculumItem.title) === lessonTitle
//   );
//   const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
//   const [currentWeekIndex, setCurrentWeekIndex] = useState(0);

//   function next(index) {
//     const currentTopic = currentLesson.topics[currentTopicIndex].title;

//     // Mark the current topic as completed
//     updateCompletedLessons(currentTopic);

//     // Update progress
//     updateProgress(currentLesson.title, currentTopic);

//     if (index === currentLesson.topics.length - 1) {
//       // Move to next week
//       setCurrentWeekIndex((prevIndex) => {
//         const newIndex = prevIndex + 1;
//         if (newIndex < course.curriculum.length) {
//           const nextWeek = course.curriculum[newIndex];
//           navigate(`/courses/${slug}/lessons/${slugify(nextWeek.title)}`);
//         } else {
//           navigate(`/courses/${slug}/lessons/end`);
//         }
//         setCurrentTopicIndex(0);

//         return newIndex;
//       });
//     } else {
//       setCurrentTopicIndex(index + 1);
//     }
//     console.log("progress", progress);
//   }

//   function prev(index) {
//     if (index === 0) {
//       setCurrentWeekIndex((prevIndex) => {
//         const newIndex = prevIndex - 1;
//         if (newIndex >= 0) {
//           const prevWeek = course.curriculum[newIndex];
//           const lastTopicIndex = prevWeek.topics.length - 1;
//           setCurrentTopicIndex(lastTopicIndex);
//           navigate(`/courses/${slug}/lessons/${slugify(prevWeek.title)}`);
//         } else {
//           navigate(`/courses/${slug}/lessons`);
//         }
//         return newIndex;
//       });
//     } else {
//       setCurrentTopicIndex(index - 1);
//     }
//   }

//   return (
//     <div className="p-24">
//       <h1 className="text-3xl font-bold">{currentLesson.title}</h1>
//       <ProgressBar progress={progress[currentLesson.title]} />

//       {currentLesson.topics.map(
//         (topic, index) =>
//           index === currentTopicIndex && (
//             <div key={index} className="flex flex-col gap-3">
//               <div className="flex justify-between fixed  top-[10%] left-3 right-3 p-20">
//                 <ArrowLeftCircle
//                   className="w-10 h-10 text-white cursor-pointer hover:bg-teal-500 bg-teal-600 rounded-full"
//                   onClick={() => prev(index)}
//                 />
//                 <ArrowRightCircle
//                   className="w-10 h-10 text-white cursor-pointer hover:bg-teal-500 bg-teal-600 rounded-full"
//                   onClick={() => next(index)}
//                 />
//               </div>
//               <p className="text-2xl font-bold">
//                 Lesson {index + 1}: {topic.title}
//               </p>
//               <p className="text-xl">{topic.overview}</p>
//               <Video src={"https://www.youtube.com/embed/dQw4w9WgXcQ"} />
//             </div>
//           )
//       )}
//     </div>
//   );
// }

import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { courses } from "../../contens";
import { slugify } from "../../helper/slugify";
import ProgressBar from "../../Components/ProgressBar";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Video from "../../Components/Video";
import { useLessonContext } from "../../context";

export default function Lesson() {
  const { lessonTitle, slug } = useParams();
  const navigate = useNavigate();
  const {
    calculateTotalLessons,
    setCompletedLessons,
    updateProgress,
    completedLessons,
    progress,
  } = useLessonContext();
  const course = courses.find((course) =>
    course.curriculum.some(
      (curriculumItem) => slugify(curriculumItem.title) === lessonTitle
    )
  );
  const currentLesson = course?.curriculum.find(
    (curriculumItem) => slugify(curriculumItem.title) === lessonTitle
  );

  const currentLessonIndex = course.curriculum.findIndex(
    (curriculumItem) => slugify(curriculumItem.title) === lessonTitle
  );

  useEffect(() => {
    if (course) {
      calculateTotalLessons(course.curriculum);
    }
  }, [course]);

  useEffect(() => {
    updateProgress(course.title);
  }, [completedLessons, setCompletedLessons]);
  if (currentLessonIndex === 0) {
    setCompletedLessons(1);
  }

  function prev() {
    if (currentLessonIndex === 0) {
      // setCompletedLessons(0);
      navigate(`/courses/${slug}/lessons`);
    } else {
      const prevLesson = course.curriculum[currentLessonIndex - 1];
      if (prevLesson) {
        const prevTitle = prevLesson.title;
        navigate(`/courses/${slug}/lessons/${slugify(prevTitle)}`);
      } else {
        console.error("Previous lesson not found");
      }
      console.log(prevLesson);
    }
  }
  function next() {
    setCompletedLessons(currentLessonIndex + 1);

    if (currentLessonIndex === course.curriculum.length - 1) {
      navigate(`/courses/${slug}/lessons/end`);
    } else {
      const nextLesson = course.curriculum[currentLessonIndex + 1];
      if (nextLesson) {
        const nextTitle = nextLesson.title;
        navigate(`/courses/${slug}/lessons/${slugify(nextTitle)}`);
      } else {
        console.error("Next lesson not found");
      }
    }
  }

  return (
    <div className="p-24">
      <h1 className="text-3xl font-bold">{currentLesson.title}</h1>
      <ProgressBar progress={progress[course.title]} />
      <div className="flex flex-col gap-3">
        <div className="flex justify-between fixed  top-[10%] left-3 right-3 p-20">
          <ArrowLeftCircle
            className="w-10 h-10 text-white cursor-pointer hover:bg-teal-500 bg-teal-600 rounded-full"
            onClick={() => prev()}
          />
          <ArrowRightCircle
            className="w-10 h-10 text-white cursor-pointer hover:bg-teal-500 bg-teal-600 rounded-full"
            onClick={() => next()}
          />
        </div>
        <p className="text-2xl font-bold">{currentLesson.title}</p>
        <p className="text-xl">{currentLesson.overview}</p>
        <Video src={"https://www.youtube.com/embed/dQw4w9WgXcQ"} />
      </div>
    </div>
  );
}
