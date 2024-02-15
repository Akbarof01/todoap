import React from "react";

function Apps({ category, currentCategory, handleCategoryClick }) {
  return (
    <li
      className={`cursor-pointer ${
        currentCategory === category ? "text-[#ff4747]" : ""
      }`}
      onClick={() => handleCategoryClick(category)}
    >
      {category}
    </li>
  );
}

export default Apps;
