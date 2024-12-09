import React from "react";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="w-10/12 mx-auto flex items-center  justify-between p-4">
        <a href="/" className="text-2xl font-bold">
          E-learning
        </a>
      </div>
    </nav>
  );
}
