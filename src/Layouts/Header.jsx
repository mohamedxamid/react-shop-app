import React from "react";

const Header = () => {
  return (
    <div className="bg-blue-500">
      <div className="w-11/12 mx-auto flex justify-between items-center py-2">
        {/* eslint-disable-next-line */}
        <a href="#" className="text-3xl">
          React Shop
        </a>
        {/* eslint-disable-next-line */}
        <a href="#" className="text-xl">
          Repo
        </a>
      </div>
    </div>
  );
};

export default Header;
