import React from "react";
import "../styles/loader.css";
export const Loader = () => {
  return (
    <div className="loader">
      <div class="three-body">
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
      </div>
    </div>
  );
};
