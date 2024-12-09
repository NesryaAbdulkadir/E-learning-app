import { createContext, useContext, useEffect, useState } from "react";

const LessonContext = createContext();

export default function LessonContextProvider({ children }) {
  const [progress, setProgress] = useState(
    JSON.parse(localStorage.getItem("lessonProgress"))
  );
  const [completedLessons, setCompletedLessons] = useState(0);
  const [totalLessons, setTotalLessons] = useState();

  console.log("total", totalLessons);
  console.log("completed", completedLessons);
  console.log("progress", progress);

  useEffect(() => {
    const storedProgress = localStorage.getItem("lessonProgress");

    if (storedProgress) {
      setProgress(JSON.parse(storedProgress));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lessonProgress", JSON.stringify(progress));
  }, [progress, completedLessons, totalLessons]);

  const calculateTotalLessons = (modules) => {
    const allLessons = modules.length;
    setTotalLessons(allLessons);
  };

  const updateProgress = (title) => {
    const newProgress =
      totalLessons !== 0 ? (completedLessons / totalLessons) * 100 : 0;

    setProgress((prev) => ({
      ...prev,
      [title]: newProgress,
    }));
  };

  const value = {
    progress,
    setProgress,
    updateProgress,
    calculateTotalLessons,
    setTotalLessons,
    totalLessons,
    completedLessons,
    setCompletedLessons,
  };
  return (
    <LessonContext.Provider value={value}>{children}</LessonContext.Provider>
  );
}

export const useLessonContext = () => useContext(LessonContext);
