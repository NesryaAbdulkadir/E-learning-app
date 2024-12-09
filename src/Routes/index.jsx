import React from "react";
import { useRoutes } from "react-router-dom";
import Dashboard from "../pages/DashBoard";
import Course from "../pages/Course";
import NotFound from "../pages/NotFound";
import CourseByCategory from "../pages/CourseByCatagory";
import Lessons from "../pages/Lessons";
import Lesson from "../pages/Lesson";
import LessonEnd from "../pages/LessonEnd";

export default function Routes() {
  const element = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
    },

    {
      path: "/courses/:slug",
      element: <Course />,
    },
    {
      path: "/courses/category/:category",
      element: <CourseByCategory />,
    },
    {
      path: "/courses/:slug/lessons",
      element: <Lessons />,
    },
    {
      path: "/courses/:slug/lessons/:lessonTitle",
      element: <Lesson />,
    },
    {
      path: "/courses/:slug/lessons/end",
      element: <LessonEnd />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return element;
}
