import React from "react";
import SideBar from "../../Components/SideBar";
import Courses from "../../Components/Courses";
import { categories, courses } from "../../contens";

export default function Dashboard() {
  return (
    <div className="">
      <SideBar />
      <Courses courses={courses} categories={categories} title={"Courses"} />
    </div>
  );
}
