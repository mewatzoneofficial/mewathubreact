import React from "react";
import "./CustomLoading.css";

const CustomLoading = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default CustomLoading;
