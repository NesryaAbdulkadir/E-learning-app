import React, { useState } from "react";
import { categories } from "../../contens";
import { slugify } from "../../helper/slugify";
import { FileStack, X } from "lucide-react";

export default function SideBar() {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <>
      <div className="flex flex-col gap-2 pt-2  md:hidden mt-24 p-12 z-50">
        <button onClick={handleShowSideBar} className="text-xl">
          <p className="text-xl text-left ">See Catagories</p>
        </button>
      </div>
      <div
        className={`p-5 ${
          showSideBar ? "block" : "hidden"
        } md:block shadow-md h-screen mt-14 fixed top-0 left-0 overflow-scroll bg-white z-10`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold py-3">Catagories</h1>
          <X
            className="text-xl text-left cursor-pointer md:hidden"
            onClick={handleShowSideBar}
          />
        </div>

        <ul className="list-none flex flex-col gap-2 pt-2">
          {categories.map((component, index) => {
            return (
              <li key={index} className="text-xl p-2">
                <a href={`/courses/category/${slugify(component.name)}`}>
                  {component.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
