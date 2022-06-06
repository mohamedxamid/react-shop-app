import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-500">
      <div className="w-11/12 mx-auto flex justify-between items-center py-2">
        <p>&copy; Copyright Text</p>
        {/* eslint-disable-next-line */}
        <a href="#">Repo</a>
      </div>
    </div>
  );
};

export default Footer;
